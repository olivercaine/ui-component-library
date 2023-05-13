import { render, screen } from '@testing-library/react'
import React from 'react'
import { CustomComponent } from './CustomComponent'

describe('CustomComponent', () => {
  it('Should contain "My custom component text"', () => {
    render(<CustomComponent />)
    expect(screen.getByText('My custom component text')).toBeInTheDocument()
  })
})
