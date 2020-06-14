const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants')

const withPlugins = require('next-compose-plugins')
const withProgressBar = require('next-progressbar')
const withTM = require('next-transpile-modules')
const optimizedImages = require('next-optimized-images')
const withMDX = require('@next/mdx')()

module.exports = withPlugins(
  [
    [withProgressBar, { progressBar: { profile: true } }],
    optimizedImages,
    withMDX,
    [withTM, { transpileModules: [] }],
  ],

  {
    target: 'server',
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    distDir: '.next',
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
    },

    // webpack: (config, options) => {
    //   config.node = {
    //     fs: "empty"
    //   };
    //   return config;
    // },

    [PHASE_DEVELOPMENT_SERVER]: {
      distDir: '.next',
      assetPrefix: '',
      compress: false,
    },
    [PHASE_PRODUCTION_BUILD + PHASE_PRODUCTION_SERVER]: {
      distDir: 'build',
      assetPrefix: '', // TODO: add asset prefix for deployed production bundle
      compress: true,
    },
  }
)
