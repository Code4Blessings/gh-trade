"use strict";

const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  seo_title: String,
  seo_description: String,
  url: {
    type: String,
    trim: true,
    required: true
  },
  date: Date,
  time: String,
  duration: String,
  thumbnail_img: String,
  html: String,
  joined_qty: Number,
  joined_members: Array,
  address: String,
  city: String,
  price: Number,
  max_capacity: String
});

EventSchema.statics.createNewEvent = async function(request) {
  const saveEvent = await (function(req) {
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
        html += `<img src="/static/images/event-images/${
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

    const newEvent = new Event({
      seo_title: body.page_title,
      seo_description: body.page_description,
      url: body.page_url,
      thumbnail_img: req.session.filename[0],
      html: `<section>${html}</section>`,
      date: body.date,
      joined_qty: body.joined,
      time: body.time,
      city: body.city,
      address: body.address,
      duration: body.duration,
      price: body.price,
      max_capacity: body.capacity
    });
    return newEvent.save();
  })(request);

  return {
    saveEvent
  };
};

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
