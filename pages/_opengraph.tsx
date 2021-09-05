/**
 * Example OpenGraph page which you can generate using puppeteer
 */

import * as React from "react";

import nextplateConfig from "~config/nextplate";
import Logo from "~public/logo.svg";
import { NextPage } from "~types/next";

import { PageConfig } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const OpenGraphPage: NextPage = () => {
  const router = useRouter();

  const title = (router.query.title as string) ?? "Nextplate Chakra Example Page";
  const description = (router.query.description as string) ?? "Opinionated Next.js template with Chakra UI";

  return (
    <main className="standard card">
      {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
      <Image height="128px" src={Logo} width="128px" />

      <NextSeo title={title} />
      <h1>{title}</h1>
      <p>{description}</p>

      <style jsx>{`
        html,
        body,
        main {
          height: ${nextplateConfig.opengraph.height}px;
          width: ${nextplateConfig.opengraph.width}px;
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
