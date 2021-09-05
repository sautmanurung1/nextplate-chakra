/**
 * Example OpenGraph page which you can generate using puppeteer
 */

import * as React from "react";

import nextplateConfig from "~config/nextplate";
import Logo from "~public/logo.svg";
import { NextPage } from "~types/next";

import { Heading, Stack, Text } from "@chakra-ui/react";
import { PageConfig } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const OpenGraphPage: NextPage = () => {
  const router = useRouter();

  const title = (router.query.title as string) ?? "Nextplate Chakra Example Page";
  const description = (router.query.description as string) ?? "Opinionated Next.js template with Chakra UI";

  return (
    <Stack
      align="flex-start"
      borderWidth="1px"
      h={nextplateConfig.opengraph.height}
      justify="center"
      p={4}
      w={nextplateConfig.opengraph.width}
    >
      {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
      <Image height="128px" src={Logo} width="128px" />

      <NextSeo title={title} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>

      <style jsx>{`
        html,
        body {
          display: block;
          height: ${nextplateConfig.opengraph.height}px;
          width: ${nextplateConfig.opengraph.width}px;
        }
      `}</style>
    </Stack>
  );
};

OpenGraphPage.layout = "empty";

export const config: PageConfig = {
  unstable_runtimeJS: false,
};

export default OpenGraphPage;
