/**
 * Default layout component, only includes basic SEO tags
 */

import * as React from "react";

import Footer from "~components/footer";
import Navbar from "~components/navbar";
import siteConfig from "~config/site";

import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        canonical={siteConfig.siteUrl + (router.asPath || "")}
        defaultTitle={siteConfig.title}
        description={siteConfig.description}
        openGraph={{
          type: "website",
          site_name: siteConfig.title,
          images: [
            {
              url: `${siteConfig.siteUrl}/social.png`,
            },
          ],
        }}
        titleTemplate={`%s ${siteConfig.titleSeparator} ${siteConfig.title}`}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        name={siteConfig.title}
        sameAs={Object.values(siteConfig.socials)}
        type="person"
        url={siteConfig.siteUrl}
      />

      <div className="container standard default-layout">
        <Navbar />

        <main>
          {children}
          {/*  */}
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .default-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 1em;
        }
        .default-layout main {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}
