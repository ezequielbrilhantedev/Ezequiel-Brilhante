import { render } from '@testing-library/react'
import Header from './header'

it('component renders correctly', () => {
  const { getByText } = render(<Header></Header>)

  expect(getByText('Ezequiel Brilhante Dev'))
  expect(getByText('Home'))
  expect(getByText('LinkedIn'))
  expect(getByText('GitHub'))
})
