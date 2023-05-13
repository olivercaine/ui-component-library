import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Button } from '../../../index'

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>

const template = storyTemplate(Button)

const defaultArgs = {
  onClick: action('Clicked'),
}

export const Default = template({ ...defaultArgs })

export const Disabled = template({ ...defaultArgs, disabled: true })

export const CustomText = template({ ...defaultArgs, text: 'Custom button text', onClick: jest.fn() })
CustomText.play = async ({ canvasElement, args }) => {
  const canvas = await within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => {
    expect(args.onClick).toHaveBeenCalledTimes(1)
  })
}

export const LinkToStory = template({ onClick: linkTo('Components/CustomComponent', 'Default'), text: 'Go to another story' })
