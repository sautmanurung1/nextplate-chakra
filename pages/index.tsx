import * as React from "react";

import siteConfig from "~config/site";
import { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const HomePage: NextPage = () => {
  return (
    <section>
      <NextSeo title="Home" />
      <h1>{siteConfig.title}</h1>
      <p>{siteConfig.description}</p>
      <a href="#">Read the Nextplate docs on how to use this boilerplate (WIP)</a>
    </section>
  );
};

export default HomePage;
