/**
 * https://nextjs.org/docs/advanced-features/custom-document
 */

import * as React from "react";

import FaviconMetaTags from "~generated/favicon-meta-tags";
import emotionCache from "~lib/emotion-cache";

import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

const { extractCritical } = createEmotionServer(emotionCache);

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

          {/* required google fonts preconnect tags */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />

          {/* generated favicon meta tags using `yarn generate:favicons` */}
          <FaviconMetaTags />
        </Head>

        <body>
          {/* https://chakra-ui.com/docs/features/color-mode#adding-the-colormodescript */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
