// @ts-check

const nextplateConfig = {
  /**
   * Set open graph layout dimensions
   */
  opengraph: {
    width: 1024,
    height: 600,
  },

  /**
   * Replaces `react` and `react-dom` on client-side production.
   * Also available via env by filling `PREACT_ON_PRODUCTION`.
   */
  preactOnProduction: process.env.PREACT_ON_PRODUCTION || true,
};

module.exports = nextplateConfig;
