import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../.storybook/helpers'
import { CustomComponent } from '../../index'

export default {
  component: CustomComponent,
  title: 'Components/CustomComponent',
} as ComponentMeta<typeof CustomComponent>

const template = storyTemplate(CustomComponent)

export const Default = template({})
