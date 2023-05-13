import { StoryTypes } from '@olliecaine/storybook-utils'
import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import results from '../.jest-test-results.json'
import '../src/ui/styles/styles.css'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: 'iphone6',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      order: [
        StoryTypes.Applications,
        StoryTypes.Features,
        StoryTypes.Templates,
        StoryTypes.Components,
        StoryTypes.Basics,
        StoryTypes.Principles,
        '*'
      ],
    },
  },
}

export const decorators = [
  withTests({
    results,
  }),
]