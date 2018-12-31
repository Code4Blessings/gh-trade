"use strict";

const mongoose = require("mongoose");
const BlogList = require("./blogList");

const BlogSchema = new mongoose.Schema({
  seo_title: String,
  seo_description: String,
  blog_url: {
    type: String,
    trim: true,
    required: true
  },
  blog_date: {
    type: Date,
    default: Date.now
  },
  blog_thumbnail_img: {
    type: String,
    trim: true
  },
  image_directory: String,
  blog_html: {
    type: String,
    required: true
  },
  blog_h1: String,
  blog_h2: String,
  author: String
});

// index content for text search
BlogSchema.index({
  blog_h1: "text",
  blog_h2: "text",
  blog_html: "text",
  seo_description: "text",
  seo_title: "text",
  author: "text"
});

BlogSchema.statics.createNewAndAddToBlogList = async function(request) {
  const saveBlog = await (function(req) {
    let html = "";
    const body = req.body;
    const layoutArr = body.layout_order.split(",");

    const imageTagGenerator = {
      src: "",
      alt: "",
      title: "",
      imageCount: 0,
      attributeCount: 0,
      pushToHtml() {
        if (this.imageCount < 1) {
          return this.refresh();
        }
        html += `<img src="/static/images/blog-images/${body.uniqueDirectory}/${
          req.session.filename[this.imageCount]
        }" alt="${this.alt}" title="${this.title}"/>`;
        this.refresh();
      },

      refresh() {
        this.attributeCount = 0;
        this.imageCount++;
      },

      reset() {
        this.imageCount = 0;
        this.attributeCount = 0;
      }
    };

    for (let elm of layoutArr) {
      //H1
      if (/h1/.test(elm)) {
        html += `<h1>${body[elm]}</h1>`;
      }
      //H2
      else if (/h2/.test(elm)) {
        html += `<h2>${body[elm]}</h2>`;
      }
      //H3
      else if (/h3/.test(elm)) {
        html += `<h3>${body[elm]}</h3>`;
      }
      //P
      else if (/p/.test(elm)) {
        html += `<pre>${body[elm]}</pre>`;
      }
      //IMG SRC
      else if (/image/.test(elm)) {
        imageTagGenerator.src = "this is src tag";
        imageTagGenerator.attributeCount++;
      }
      //IMG TITLE
      else if (/imgTitle/.test(elm)) {
        imageTagGenerator.title = body[elm];
        imageTagGenerator.attributeCount++;
      }
      //IMG ALT
      else if (/imgAlt/.test(elm)) {
        imageTagGenerator.alt = body[elm];
        imageTagGenerator.attributeCount++;
      }
      //image attributes completed
      if (imageTagGenerator.attributeCount === 3) {
        imageTagGenerator.pushToHtml();
      }
    }

    imageTagGenerator.reset();

    const newBlog = new Blog({
      seo_title: body.page_title,
      seo_description: body.page_description,
      blog_url: body.page_url,
      blog_h1: body.titleOne,
      blog_h2: body.titleTwo,
      image_directory: body.uniqueDirectory,
      blog_thumbnail_img: req.session.filename[0],
      blog_html: `<section>${html}</section>`,
      author: body.author
    });

    return newBlog.save();
  })(request);

  const saveToBlogList = BlogList.findOneAndUpdate(
    {},
    {
      $push: {
        blog: {
          url: request.body.page_url,
          title: request.body.page_title,
          author: request.body.author
        }
      }
    }
  );

  return {
    saveBlog,
    saveToBlogList: await saveToBlogList
  };
};

BlogSchema.statics.fetchThumbnails = function(recordQty, skipQty, sort) {
  return Blog.find()
    .skip(skipQty)
    .limit(recordQty)
    .sort(sort);
};

BlogSchema.statics.searchForContent = function(searchString) {
  return Blog.find(
    { $text: { $search: searchString, $caseSensitive: false } },
    {
      seo_title: true,
      seo_description: true,
      blog_url: true
    }
  )
    .limit(15)
    .lean();
};

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
