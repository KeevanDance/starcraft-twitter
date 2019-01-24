import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../components/App'

afterEach(cleanup);

test('renders header text', () => {
  const { getByText } = render(<App />)
  expect(getByText('Starcraft Twitter')).toBeInTheDocument();
})