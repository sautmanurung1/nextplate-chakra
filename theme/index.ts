// https://chakra-ui.com/docs/theming/customize-theme

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        minH: "100vh",

        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
    },
  },
});

export default theme;
