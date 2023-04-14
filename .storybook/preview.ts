import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: 'iphone5',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      order: [
        'Applications',
        'Features',
        'Templates',
        'Components',
        'Basics',
        'Principles',
        '*'
      ],
    },
  },
}