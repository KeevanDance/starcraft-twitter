import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../components/App'

afterEach(cleanup)

test('the region filter box is present', () => {
  const { getByText } = render(<App />)
  expect(getByText('Region')).toBeInTheDocument();
})