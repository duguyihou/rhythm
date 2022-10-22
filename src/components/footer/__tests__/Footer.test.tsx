import { render } from '@testing-library/react'

import Footer from '../Footer'

describe('footer', () => {
  it('renders a footer', () => {
    const footer = render(<Footer />)
    expect(footer).toMatchSnapshot()
  })
})
