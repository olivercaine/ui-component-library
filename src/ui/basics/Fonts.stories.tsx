import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'
import { storyTemplate } from '../../../.storybook/helpers'

const Fonts: FC = () =>
  <div className='text-white'>
    <section id='typography'>
      <h4>Typography</h4>
      <p style={{ fontFamily: 'Verdana' }}>Verdana</p>
    </section>
  </div>

export default {
  component: Fonts,
  title: 'Basics/Fonts',
} as ComponentMeta<typeof Fonts>

const template = storyTemplate(Fonts)

export const Default = template({})
