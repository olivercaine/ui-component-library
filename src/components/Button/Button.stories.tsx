import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../.storybook/helpers'
import { Button, IProps } from './Button'

export default {
  component: Button,
  title: 'Basics/Button',
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const template = storyTemplate(Button)

const defaultArgs: IProps = {
  onClick: action('Clicked'),
}

export const Default = template({ ...defaultArgs })

export const CustomText = template({ ...defaultArgs, text: 'Custom button text' })
