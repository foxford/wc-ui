import { html, LitElement, classString } from '@polymer/lit-element'
import { withStyle } from '@netology-group/wc-utils/lib/mixins/mixins'

import styles from './tab-item.css'

export class TabItem extends LitElement {
  static get properties () {
    return {
      active: Boolean,
    }
  }

  _render ({ active }) {
    return html`
      <div class$="${classString({ item: true, active })}">
        ${this.children.length ? this.children : this.textContent}
      </div>
    `
  }
}

export default withStyle(TabItem, styles)

export { styles }
