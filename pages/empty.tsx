/**
 * Example page using empty layout
 */

import * as React from "react";

import { NextPage } from "~types/next";

import { Heading, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { NextSeo } from "next-seo";

const EmptyLayoutPage: NextPage = () => {
  return (
    <Stack as="main">
      <NextSeo title="Empty" />
      <Heading>Empty Layout Page</Heading>
      <NextLink href="/" passHref>
        <Link color="teal.600">Back to homepage</Link>
      </NextLink>
    </Stack>
  );
};

EmptyLayoutPage.layout = "empty";

export default EmptyLayoutPage;
