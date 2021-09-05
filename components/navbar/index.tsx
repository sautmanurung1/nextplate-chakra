import * as React from "react";

import Logo from "~public/logo.svg";

import { HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const routes: Record<string, React.ReactNode> = {
  "/": "Home",
  "/about": "About",
  "/empty": "Empty Layout",
  "/_opengraph": "Open Graph",
  "/api/opengraph/?title=hello%20world&description=this%20is%20a%20test": "Open Graph API",
};

export default function Navbar() {
  return (
    <HStack as="nav" spacing={4}>
      {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
      <Image height="24px" src={Logo} width="24px" />

      {Object.entries(routes).map(([href, node]) => (
        <NextLink key={href} href={href} passHref>
          <Link color="teal.600">{node}</Link>
        </NextLink>
      ))}
    </HStack>
  );
}
