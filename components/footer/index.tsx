import * as React from "react";

import { Box, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" pb={4}>
      <small>
        <b>
          Made using{" "}
          <Link color="teal.600" href="https://nextjs.org">
            Next.js
          </Link>{" "}
          and{" "}
          <Link color="teal.600" href="https://github.com/chakra-ui/chakra-ui">
            Chakra UI
          </Link>
          .
        </b>
        <br />
        MIT License &copy; {new Date().getFullYear()}&mdash;present{" "}
        <Link color="teal.600" href="https://github.com/kodingdotninja">
          Koding Ninja
        </Link>
        .
      </small>
    </Box>
  );
}
