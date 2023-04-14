import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
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

export const CustomText = template({ ...defaultArgs, text: 'Custom btn text', onClick: jest.fn() })
CustomText.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => {
    expect(args.onClick).toHaveBeenCalledTimes(1)
  })
}
