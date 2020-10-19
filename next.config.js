// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const path = require("path");

dotenvLoad();
const nextConfig = {};

module.exports = withPlugins([[optimizedImages]], nextEnv(), nextConfig);
