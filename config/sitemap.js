// @ts-check

const { siteUrl } = require("./site");

/**
 * https://github.com/iamvishnusankar/next-sitemap/blob/master/packages/next-sitemap/src/interface.ts#L15
 *
 * @type {import("next-sitemap").IConfig}
 */
const sitemapConfig = {
  changefreq: "daily",
  generateRobotsTxt: true,
  priority: 0.7,
  siteUrl,
};

module.exports = sitemapConfig;
