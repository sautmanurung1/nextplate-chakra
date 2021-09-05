/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import * as React from "react";

import layouts from "~layouts";
import theme from "~theme";
import { NextComponentType } from "~types/next";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

interface StyleProviderProps {
  children: React.ReactNode;
}

// add your style providers here (e.g. chakra-ui's <ChakraProvider />)
function StyleProvider({ children }: StyleProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
      {/*  */}
    </ChakraProvider>
  );
}

interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}

export default function CustomApp({ Component, pageProps }: CustomAppProps) {
  const Layout = React.useMemo(() => layouts[Component.layout ?? "default"], [Component.layout]);

  return (
    <StyleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyleProvider>
  );
}
