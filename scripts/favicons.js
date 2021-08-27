// @ts-check

const favicons = require("favicons");
const fs = require("fs/promises");
const path = require("path");

const config = require("../config/site");

/** @param {string[]} rest */
function cwd(...rest) {
  return path.join(process.cwd(), ...rest);
}

(async () => {
  const { files, images, html } = await favicons(cwd("./public/logo.png"), {
    path: "/icons/",
    appName: config.title,
    appShortName: config.title,
    appDescription: config.description,
    developerName: config.title,
    developerURL: config.url,
    background: config.theme,
    theme_color: config.theme,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: false,
      windows: true,
      yandex: false,
    },
    logging: true,
  });

  await Promise.all([
    ...files.map(({ contents, name }) => fs.writeFile(cwd("./public", name), contents)),
    ...images.map(({ contents, name }) => fs.writeFile(cwd("./public/icons", name), contents)),
    fs.writeFile(
      cwd("./generated/favicon-meta-tags.jsx"),
      `export default function FaviconMetaTags() { return <>${html.map((h) => h.replace(/>$/, " />")).join(" ")}</>; }`,
    ),
  ]);
})();
