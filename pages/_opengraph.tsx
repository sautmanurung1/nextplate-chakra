/**
 * Example OpenGraph page which you can generate using puppeteer
 */

import * as React from "react";

import siteConfig from "~config/site";
import { NextPage } from "~types/next";

import { PageConfig } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const OpenGraphPage: NextPage = () => {
  const router = useRouter();

  const title = (router.query.title as string) ?? "Nextplate Bare Example Page";
  const description = (router.query.description as string) ?? "Opinionated Next.js barebones template";

  return (
    <main className="standard card">
      {/* eslint-disable @next/next/no-img-element,@typescript-eslint/no-unsafe-assignment */}
      <img alt={siteConfig.title} height="128px" src="/logo.svg" width="128px" />

      <NextSeo title={title} />
      <h1>{title}</h1>
      <p>{description}</p>

      <style jsx>{`
        html,
        body,
        main {
          height: 600px;
          width: 1024px;
          font-size: 2em;
        }

        main {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1em;
        }
        main * {
          margin: 0;
          padding: 0.2em 0;
        }
      `}</style>
    </main>
  );
};

OpenGraphPage.layout = "empty";

export const config: PageConfig = {
  unstable_runtimeJS: false,
};

export default OpenGraphPage;
