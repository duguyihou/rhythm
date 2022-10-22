import { render } from '@testing-library/react'

import MainLayout from '../MainLayout'

describe('mainLayout', () => {
  it('renders main layout', () => {
    const children = <h1>mainLayout</h1>
    const mainLayout = render(<MainLayout>{children}</MainLayout>)

    expect(mainLayout).toMatchSnapshot()
  })
})
