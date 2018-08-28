import { html } from '@polymer/lit-element'

import ui from '@fxf/ui/src/components/Progress/Progress.sass'

import { cn } from '../utils'

import css from './progress.css'

export const progress = ({
  classname,
  children,
  width,
}) => html`
  <div class$=${cn(css.root, ui.root, classname)}>
    ${children}
    <div class$=${cn(css.bar, ui.bar)} style="width: ${width}%;"></div>
  </div>
`

