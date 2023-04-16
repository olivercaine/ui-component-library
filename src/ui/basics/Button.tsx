import React, { FC, MouseEventHandler } from 'react'

export interface IProps {
  /**
  Button text
  */
  text?: string
  /**
  Disable the button
  */
  disabled?: boolean
  /**
  The callback to call when the button is clicked
  */
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<IProps> = ({
  text = 'Default button text',
  disabled = false,
  onClick = console.log,
}) =>
  <button className='button' disabled={disabled} onClick={onClick}>
    {text}
  </button>
