import { render } from '@testing-library/react'

import Head from '../Head'

test('head', () => {
  const head = render(<Head />)

  expect(head).toMatchSnapshot()
})
