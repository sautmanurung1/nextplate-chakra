import * as React from "react";

import siteConfig from "~config/site";

import Link from "next/link";

const routes: Record<string, React.ReactNode> = {
  "/": "Home",
  "/about": "About",
  "/empty": "Empty Layout",
  "/_opengraph": "Open Graph",
};

export default function Navbar() {
  return (
    <nav>
      {/* eslint-disable @next/next/no-img-element,@typescript-eslint/no-unsafe-assignment */}
      <img alt={siteConfig.title} height="24px" src="/logo.svg" width="24px" />

      {Object.entries(routes).map(([href, node]) => (
        <Link key={href} href={href}>
          <a>{node}</a>
        </Link>
      ))}

      <style jsx>{`
        nav {
          display: flex;
        }
        nav a:not(:first-child) {
          margin-left: 1em;
        }
      `}</style>
    </nav>
  );
}
