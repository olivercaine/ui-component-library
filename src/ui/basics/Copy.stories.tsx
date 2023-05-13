import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'
import { storyTemplate } from '../../../.storybook/helpers'

const Copy: FC = () =>
  <div className='text-white'>
    <h1>Heading 1</h1>

    <h2>Heading 2</h2>

    <h3>Heading 3</h3>

    <h4>Heading 4</h4>

    <h5>Heading 5</h5>

    <h6>Heading 6</h6>

    <h2>Paragraphs</h2>
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Varius vel pharetra vel turpis. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor condimentum
        lacinia quis vel eros. Lectus sit amet est placerat in egestas erat. Quis blandit turpis cursus in hac habitasse. Porttitor
        rhoncus dolor purus non enim praesent. Amet nisl purus in mollis nunc sed id semper. Maecenas sed enim ut sem viverra. Orci
        nulla pellentesque dignissim enim. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Molestie ac feugiat
        sed lectus vestibulum. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Et malesuada fames ac turpis egestas
        maecenas. Vitae et leo duis ut diam quam nulla porttitor. Augue interdum velit euismod in. Diam phasellus vestibulum lorem sed
        risus ultricies tristique nulla aliquet. Eros donec ac odio tempor orci.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Varius vel pharetra vel turpis. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor condimentum
        lacinia quis vel eros. Lectus sit amet est placerat in egestas erat. Quis blandit turpis cursus in hac habitasse. Porttitor
        rhoncus dolor purus non enim praesent. Amet nisl purus in mollis nunc sed id semper. Maecenas sed enim ut sem viverra. Orci
        nulla pellentesque dignissim enim. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Molestie ac feugiat
        sed lectus vestibulum. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Et malesuada fames ac turpis egestas
        maecenas. Vitae et leo duis ut diam quam nulla porttitor. Augue interdum velit euismod in. Diam phasellus vestibulum lorem sed
        risus ultricies tristique nulla aliquet. Eros donec ac odio tempor orci.</p>
    </>

    <h2>Small</h2>
    <small>This is some smaller text</small>

    <h2>Bold</h2>
    <b>This is some bold text</b>

    <h2>Link</h2>
    <a href='/'>This is a regular link</a>
  </div>

export default {
  component: Copy,
  title: 'Basics/Copy',
} as ComponentMeta<typeof Copy>

const template = storyTemplate(Copy)

export const Default = template({})
