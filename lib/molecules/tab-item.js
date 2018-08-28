import { html, LitElement, classString as cs } from '@polymer/lit-element'

import { cn } from '../utils'

import css from './tab-item.css'

export class ItemElement extends LitElement {
  static get properties () {
    return {
      active: Boolean,
    }
  }

  _render ({ active }) {
    return html`
      <div class$=${cn(css.root, cs({ [css.active]: active }))}>
        ${this.children.length ? this.children : this.textContent}
      </div>
    `
  }
}
