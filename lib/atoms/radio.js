import { html } from '@polymer/lit-element'

import ui from '@fxf/ui/src/components/Radio/Radio.sass'

import { cn } from '../utils'

import css from './radio.css'

export const radio = ({
  checked,
  classname,
  children,
  label = '',
  name = '',
  value = '',
}) => html`
  <label class$=${cn(ui.root, ui['size-medium'], css.root)} for$=${label}>
    <input
      checked$=${checked}
      class$=${cn(ui.input, css.input, classname)}
      id$=${label}
      name$=${name}
      type="radio"
      value=${value}
    />
    ${(label || children) && html`<span class$=${ui.label}>${label || children}</span>`}
  </label>
`
