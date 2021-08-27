const Log = require("next/dist/build/output/log");

const nextplateConfig = require("./config/nextplate");

/** @type {import("next/dist/server/config-shared").NextConfig} */
const nextConfig = {
  // https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L110
  experimental: {
    workerThreads: true,
  },

  // https://nextjs.org/docs/api-reference/next.config.js/headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // https://vercel.com/support/articles/how-to-enable-cors#enabling-cors-in-a-next.js-app
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: `X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version`,
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
          {
            key: "Cache-Control",
            value: "public, s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },

  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: [
      //
    ],
  },

  // https://nextjs.org/docs/advanced-features/source-maps
  productionBrowserSourceMaps: true,

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  async redirects() {
    return [
      //
    ];
  },

  // https://nextjs.org/docs/api-reference/next.config.js/rewrites
  async rewrites() {
    return [
      //
    ];
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack(config, { dev, isServer, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev,
      }),
    );

    if (!dev && !isServer && nextplateConfig.preactOnProduction) {
      Log.info("Replacing 'react' and 'react-dom' with 'preact'");

      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = nextConfig;
