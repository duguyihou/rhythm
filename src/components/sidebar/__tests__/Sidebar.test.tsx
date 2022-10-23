import { render } from '@testing-library/react'

import Sidebar from '../Sidebar'

test('sidebar', () => {
  const sidebar = render(<Sidebar />)

  expect(sidebar).toMatchSnapshot()
})
