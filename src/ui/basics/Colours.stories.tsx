import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'
import { storyTemplate } from '../../../.storybook/helpers'

const Colors: FC<{ cols: string[] }> = ({ cols }) =>
  <>
    {cols.map((color) =>
      <div style={{
        color: 'white',
        display: 'inline',
        float: 'left',
        height: '96px',
        textAlign: 'center',
        width: '96px',
        padding: '1em',
        backgroundColor: color
      }}>
        {color}
      </div>
    )}
  </>

export default {
  component: Colors,
  title: 'Basics/Colours',
} as ComponentMeta<typeof Colors>

const template = storyTemplate(Colors)

export const Default = template({ cols: ['blue', 'red', 'yellow', 'green'] })
