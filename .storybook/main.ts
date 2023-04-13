// import { StorybookConfig } from '@storybook/core-common'

const config = {
  // const config: StorybookConfig = {
  core: {
    builder: 'webpack5'
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-interactions"
  ],
  features: {
    interactionsDebugger: true, // Enable playback controls
    // storyStoreV7: true, // https://storybook.js.org/docs/react/configure/webpack#bundle-splitting
  },
  // @ts-expect-error
  docs: {
    autodocs: true
  }
}

module.exports = config