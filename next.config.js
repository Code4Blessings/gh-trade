// Webpack plugins and configs

const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["scss", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

// Sass (next configuration must be after webpack config)
const withSass = require("@zeit/next-sass");
module.exports = withSass();
