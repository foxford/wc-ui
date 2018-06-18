import { html, LitElement } from '@polymer/lit-element'
import { withStyle } from '@netology-group/webcomponents-utils/lib/mixins/mixins'

import TabBar from '../atoms/tab-bar'

const isSelected = (el, selected) => el.getAttribute('title') === selected
const selectTabItem = (list, selected) => list.map(it => isSelected(it, selected) ? it : null)

export const styles = `
  :host, :root{
    height:100%;
  }
  .tab-items {
    background-color: var(--theme-color-alabaster, #f8f8f8);
    min-height: 300px;
    height: calc(100% - 44px);
  }
  .tab-bars, .tab-items {
    min-width: 250px;
  }
`

export class TabList extends LitElement {
  static get properties () {
    return {
      selected: String,
      headless: Boolean,
    }
  }

  constructor (props) {
    super(props)

    this._childs = null
  }

  _shouldRender (...argv) {
    if (!this._childs) this._childs = Array.from(this.children)

    return super._shouldRender(...argv)
  }

  _handleTabSelect (e) {
    this.selected = e.currentTarget.name
  }

  __renderBar (selected, it) {
    const name = it.getAttribute('title')

    return TabBar({
      active: selected === name,
      name,
      onClick: e => this._handleTabSelect(e),
    })
  }

  __renderBars () {
    return this.hasAttribute('headless')
      ? null
      : html`
        <div class="tab-bars">
          ${(this._childs).map(this.__renderBar.bind(this, this.selected))}
        </div>
      `
  }

  __renderTabs (selected) {
    return html`<div class="tab-items">${selectTabItem(this._childs, selected)}</div>`
  }

  _render ({ selected }) {
    return html`
      ${this.__renderBars()}
      ${this.__renderTabs(selected)}
    `
  }
}

export default withStyle(TabList, styles)
