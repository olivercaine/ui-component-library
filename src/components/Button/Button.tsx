import React, { FC, MouseEventHandler } from 'react'

export interface IProps {
  /**
  The callback when the button is clicked
  */
  onClick: MouseEventHandler<HTMLButtonElement>
  /**
  Text to be shown in the button
  */
  text?: string
}

export const Button: FC<IProps> = ({ onClick, text = 'Default button text from module' }: IProps) =>
  <button className='btn btn-primary ollie' onClick={onClick}>
    {text}
  </button>
