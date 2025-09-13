import { Config } from '@stencil/core';

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

// process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'production';

export const config: Config = {
  namespace: 'ng-toastify-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    reloadStrategy: 'hmr',
  },
};
