import { html } from '@polymer/lit-element'
import ui from '@fxf/ui/src/components/Separator/Separator.sass'

import { cn } from '../utils'

import css from './separator.css'

const cls = classname => cn(
  classname,
  css.root,
  ui.root,
  ui['weight-1']
)

export const separator = (props = {}) => html`
    <div class$=${cls(props.classname)}></div>
  `
