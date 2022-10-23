import { render } from '@testing-library/react'

import Footer from '../Footer'

test('footer', () => {
  const footer = render(<Footer />)
  expect(footer).toMatchSnapshot()
})
