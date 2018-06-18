import { html, classString } from '@polymer/lit-element'
import { withStyle } from '@netology-group/webcomponents-utils/lib/mixins/template-mixins'

export const styles = `
  .tab-bar {
    display: inline-block;
    padding: 14px 20px;
  }
  .tab-bar.active {
    background-color: var(--theme-color-alabaster, #f8f8f8);
  }
  .tab-bar:not(.active){
    cursor: pointer;
  }
`

export const tabBar = ({
  active,
  children = undefined,
  name,
  onClick,
}) => html`
  <span
    name="${name}"
    class$="${classString({ 'tab-bar': true, active })}"
    on-click="${onClick}"
  >
    ${children || name}
  </span>
`

export default withStyle(tabBar, styles)
