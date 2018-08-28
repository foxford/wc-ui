import { html, classString as cs } from '@polymer/lit-element'

import { cn } from '../utils'

import css from './tab-bar.css'

export const bar = ({
  active,
  children,
  name,
  onclick,
}) => html`
  <span
    name=${name}
    class$=${cn(css.root, cs({ [css.active]: active }))}
    on-click=${onclick}
  >
    ${children || name}
  </span>
`
