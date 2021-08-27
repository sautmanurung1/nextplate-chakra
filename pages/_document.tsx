/**
 * https://nextjs.org/docs/advanced-features/custom-document
 */

import * as React from "react";

import FaviconMetaTags from "~generated/favicon-meta-tags";

import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

          {/* required google fonts preconnect tags */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />

          {/* remove this css reset */}
          <link href="https://unpkg.com/hack@0.8.1/dist/hack.css" rel="stylesheet" />
          <link href="https://unpkg.com/hack@0.8.1/dist/standard.css" rel="stylesheet" />

          {/* generated favicon meta tags using `yarn generate:favicons` */}
          <FaviconMetaTags />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
