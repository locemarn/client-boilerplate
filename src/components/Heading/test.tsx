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
      'border-left': '0.7rem solid #F231A5'
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

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyleRule(
      'width',
      '3rem',
      { modifier: '::after' }
    )
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
