// import { StorybookConfig } from '@storybook/core-common'

const config = {
  // const config: StorybookConfig = {
  core: {
    builder: 'webpack5'
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss", "@storybook/addon-actions"],
  // @ts-expect-error
  docs: {
    autodocs: true
  }
}

module.exports = config