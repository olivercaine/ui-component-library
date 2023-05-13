import { ComponentStory, Story } from '@storybook/react'

export const storyTemplate = <P,>(Component: (props: P) => any) => (
  props: P
): Story<P> => {
  const template: ComponentStory<typeof Component> = (args) => Component(args)
  const story = template.bind({})
  story.args = props
  return story
}
