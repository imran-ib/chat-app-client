// next.config.js
const withPlugins = require("next-compose-plugins");
const images = require("next-images");
// const typescript = require("@zeit/next-typescript");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

// next.js configuration
const nextConfig = {};

module.exports = withPlugins([images], nextEnv(), nextConfig);
