import { html, classString } from '@polymer/lit-element'
import { withStyle } from '@netology-group/wc-utils/lib/mixins/template-mixins'

import styles from './tab-bar.css'

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

export { styles }
