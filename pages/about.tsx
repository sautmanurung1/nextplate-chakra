import * as React from "react";

import { NextPage } from "~types/next";

import { Heading, Stack, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  return (
    <Stack as="section">
      <NextSeo title="About" />
      <Heading>About Page</Heading>
      <Text>Hello, world!</Text>
    </Stack>
  );
};

export default AboutPage;
