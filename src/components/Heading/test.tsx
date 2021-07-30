import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line in a left side', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line in a bottom side', () => {
    renderWithTheme(<Heading lineBottom>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })
})
