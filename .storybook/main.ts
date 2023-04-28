// import { StorybookConfig } from '@storybook/core-common'

const config = {
  // const config: StorybookConfig = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-actions',
    '@storybook/addon-jest'
  ],
  features: {
    interactionsDebugger: true, // Enable playback controls
    // storyStoreV7: true, // https://storybook.js.org/docs/react/configure/webpack#bundle-splitting
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },
  // @ts-expect-error
  docs: {
    autodocs: true
  }
}

module.exports = config