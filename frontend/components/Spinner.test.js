import React from 'react'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test('The Spinner appears on the screen when loading', () => {
  render(<Spinner on={true}/>)
  const spinner = screen.queryByText(/please wait/i)
  expect(spinner).toBeInTheDocument()
})