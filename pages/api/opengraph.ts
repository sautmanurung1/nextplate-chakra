import nextplateConfig from "~config/nextplate";
import { createApiHandler } from "~lib/api";
import absoluteUrl from "~utils/absolute-url";

import chrome from "chrome-aws-lambda";
import { Browser, Page } from "puppeteer-core";
import qs from "querystring";

let browser: Browser;
let page: Page;

export default createApiHandler().get(async (req, res) => {
  try {
    const title = req.query.title as string;
    const description = req.query.description as string;

    const { origin } = absoluteUrl(req);
    const query = qs.stringify({ title, description });
    const url = `${origin}/_opengraph?${query}`;

    if (!browser) {
      browser = await chrome.puppeteer.launch({
        args: chrome.args,
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: __DEV__ ? true : chrome.headless,
        ignoreHTTPSErrors: true,
      });
    }

    if (!page) {
      page = await browser.newPage();
    }

    await page.setViewport({
      width: nextplateConfig.opengraph.width,
      height: nextplateConfig.opengraph.height,
    });

    await page.goto(url, {
      waitUntil: "load",
    });

    const screenshot = await page.screenshot({
      encoding: "binary",
    });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(screenshot);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});
