import { render } from '@testing-library/react'

import Spinner from '../Spinner'

test('spinner', () => {
  const spinner = render(<Spinner />)

  expect(spinner).toMatchSnapshot()
})
