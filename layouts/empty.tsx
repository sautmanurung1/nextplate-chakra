/**
 * Empty layout component, perfect for opengraph pages
 */

import * as React from "react";

import Head from "next/head";

interface EmptyLayoutProps {
  children: React.ReactNode;
}

export default function EmptyLayout({ children }: EmptyLayoutProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      {children}
    </>
  );
}
