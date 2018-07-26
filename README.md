## Usage

### Define module

#### ES
```html
  <script type="module">
    import { TabList, TabItem } from './es/index.js';
    window.customElements.define('tab-list', TabList);
    window.customElements.define('tab-item', TabItem);
  </script>
```

#### UMD
```html
<script src="path/to/dist/index.js"></script>
<script>
  window.addEventListener('DOMContentLoaded',  function()  {
    window.customElements.define('tab-list', window.WCUI.TabList);
    window.customElements.define('tab-item', window.WCUI.TabItem);
  })
</script>
```

### In HTML

#### Tabs

##### Tabs with generated bars
```html
  <tab-list selected="Tab 1">
    <tab-item title="Tab 1">Tab 1 content</tab-item>
    <tab-item title="Tab 2">Tab 2 content</tab-item>
  </tab-list>
```

##### Headless tabs
```html
  <tab-list selected="Tab 2" headless>
    <tab-item title="Tab 1">Tab 1 content</tab-item>
    <tab-item title="Tab 2">Tab 2 content</tab-item>
  </tab-list>
```

