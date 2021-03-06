import { css } from 'styled-components'
import { rem as _rem } from 'polished'

export const rem = (...arg) => _rem(...arg)

export const media = {
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,
  mobile: inner => css`
    @media (max-width: ${890 / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${650 / 16}em) {
      ${inner}
    }
  `
}

export const flex = opt => css`
  display: flex;
  justify-content: ${opt.x || 'center'};
  align-items: ${opt.y || 'center'};
`

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`
