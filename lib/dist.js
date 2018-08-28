import {
  TabListElement,
  TabItemElement,
  button,
  checkbox,
  progress,
  radio,
  separator,
  mixins,
} from '../es/index'
import listcss from '../es/index.css'

export {
  mixins,
  button,
  checkbox,
  progress,
  radio,
  separator,
}

export const TabList = mixins.withStyle(TabListElement, listcss)

export const TabItem = mixins.withStyle(TabItemElement, listcss)
