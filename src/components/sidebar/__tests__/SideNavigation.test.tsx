import { render } from '@testing-library/react'

import SideNavigation from '../SideNavigation'

test('sideNavigation', () => {
  const sideNavigation = render(<SideNavigation />)

  expect(sideNavigation).toMatchSnapshot()
})
