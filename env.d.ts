declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PREACT_ON_PRODUCTION: string;
  }
}

declare const __DEV__: boolean;
