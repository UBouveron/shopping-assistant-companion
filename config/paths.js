// Paths (aliases) will export some path variables that we'll
// use in other Webpack config and server files

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  @assets: resolveApp("src/assets"), // For images and other assets
  @build: resolveApp("build"), // Prod built files end up here
  @config: resolveApp("config"), // App config files
  @html: resolveApp("public/index.html"),
  @indexjs: resolveApp("src/index.jsx"), // Main entry point
  @src: resolveApp("src"), // App source
  @font: resolveApp("src/assets/font"),
  @img: resolveApp("src/assets/img")
};
