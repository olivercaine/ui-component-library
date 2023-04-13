import { ComponentStory, Story } from '@storybook/react';

export const storyTemplate = <P,>(Component: (props: P) => any) => (
  props: P
): Story<P> => {
  const template: ComponentStory<typeof Component> = (args) => Component(args);
  const story = template.bind({});
  story.args = props;
  return story;
}

export enum StoryTypes {
  /** Applications are things which contain a unique set of Features, e.g. a ticket booking application */
  Applications = "Applications",
  /** Features are the interfaces that when working together, allow users to accomplish a task or solve a problem, e.g. a sign up wizard */
  Features = "Features",
  /** Templates are similar to Components but they specifically deal with layouts in the interface, e.g. header, footer, etc */
  Templates = "Templates",
  /** Components are moderately complex user interfaces which usually contain Basics and other custom elements, e.g. a date picker */
  Components = "Components",
  /** Basics are the smallest structures of a user interface which can't be broken down any further, e.g. buttons, typography etc */
  Basics = "Basics",
  /** Principles contain guiding principles which designers/developers should reference and respect when creating new design pattern, e.g. how text should be truncated */
  Principles = "Principles",
}
