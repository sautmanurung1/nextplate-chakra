import * as React from "react";

import siteConfig from "~config/site";
import { NextPage } from "~types/next";

import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const HomePage: NextPage = () => {
  return (
    <Stack as="section" spacing={4}>
      <NextSeo title="Home" />
      <Heading>{siteConfig.title}</Heading>
      <Text>{siteConfig.description}</Text>
      <Link color="teal.600" href="#">
        Read the Nextplate docs on how to use this boilerplate (WIP)
      </Link>
    </Stack>
  );
};

export default HomePage;
