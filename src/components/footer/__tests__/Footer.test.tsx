import { render } from '@testing-library/react'

import Footer from '../Footer'

it('renders homepage unchanged', () => {
  const footer = render(<Footer />)
  expect(footer).toMatchSnapshot()
})
