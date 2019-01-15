import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../components/App'

afterEach(cleanup)

test('toggle region checkboxes', async () => {
  const { getByText, getByLabelText } = render(<App />)
  expect(getByText('Region')).toBeInTheDocument();

  expect(getByLabelText('North America')).toHaveProperty('checked', false)
  expect(getByLabelText('Europe')).toHaveProperty('checked', false)
  fireEvent.click(getByLabelText('North America'));
  fireEvent.click(getByLabelText('Europe'))
  expect(getByLabelText('North America')).toHaveProperty('checked', true)
  expect(getByLabelText('Europe')).toHaveProperty('checked', true)
})