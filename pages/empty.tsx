/**
 * Example page using empty layout
 */

import * as React from "react";

import { NextPage } from "~types/next";

import Link from "next/link";
import { NextSeo } from "next-seo";

const EmptyLayoutPage: NextPage = () => {
  return (
    <main className="standard">
      <NextSeo title="Empty" />
      <h1>Empty Layout Page</h1>
      <Link href="/" passHref>
        <a>Back to homepage</a>
      </Link>
    </main>
  );
};

EmptyLayoutPage.layout = "empty";

export default EmptyLayoutPage;
