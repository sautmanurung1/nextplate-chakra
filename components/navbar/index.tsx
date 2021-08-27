import * as React from "react";

import Logo from "~public/logo.svg";

import Image from "next/image";
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
      {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
      <Image height="24px" src={Logo} width="24px" />

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
