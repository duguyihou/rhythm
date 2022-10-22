import { render } from '@testing-library/react'

import Head from '../Head'

describe('head', () => {
  it('render a heading', async () => {
    const head = render(<Head />)

    expect(head).toMatchSnapshot()
  })
})
