import { html } from '@polymer/lit-element'

import ui from '@fxf/ui/src/components/Button/Button.sass'

import { cn } from '../utils'

import css from './button.css'

const buttonCls = cn(
  css.root,
  ui.root,
  ui.rounded,
  ui['fluid-m'],
  ui['height-52'],
  ui['theme-default'],
  ui['width-s'],
)

export const button = props => html`
  <button
    disabled$=${props ? props.disabled : undefined}
    class$=${!props.disabled ? buttonCls : cn(buttonCls, ui.disabled, css.disabled)}
    form=${props.forEl}
    on-click=${props.onclick}
  >${props.text}</button>
`
