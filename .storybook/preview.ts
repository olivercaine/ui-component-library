import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/ui/styles/styles.css'
import { StoryTypes } from './helpers'

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