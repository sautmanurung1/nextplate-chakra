import * as React from "react";

import { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  return (
    <section>
      <NextSeo title="About" />
      <h1>About Page</h1>
      <p>Hello, world!</p>
    </section>
  );
};

export default AboutPage;
