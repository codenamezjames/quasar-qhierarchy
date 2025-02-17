# Component Zhierarchy

[![npm](https://img.shields.io/npm/v/quasar-ui-zhierarchy.svg?label=quasar-ui-zhierarchy)](https://www.npmjs.com/package/quasar-ui-zhierarchy)
[![npm](https://img.shields.io/npm/dt/quasar-ui-zhierarchy.svg)](https://www.npmjs.com/package/quasar-ui-zhierarchy)

**Compatible with Quasar UI v2 and Vue 3**.

# Component Zhierarchy
> Short description of the component


# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-zhierarchy'

Vue.use(Plugin)
```

**OR**:

```html
<script>
import { Component as Zhierarchy } from 'quasar-ui-zhierarchy'

export default {
  components: {
    Zhierarchy
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-zhierarchy'

Vue.use(Plugin)
```

**OR**:

```html
<script>
import { Component as Zhierarchy } from 'quasar-ui-zhierarchy'

export default {
  components: {
    Zhierarchy
  }
}
</script>
```

## UMD variant

Exports `window.zhierarchy`.

Add the following tag(s) after the Quasar ones:

```html
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-zhierarchy/dist/index.umd.min.js"></script>
</body>
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
in the `ui/dev/src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.

# Sponsors

<p align="center">
  <a href="https://github.com/pratik227/static/blob/main/sponsors.svg">
    <img src='https://github.com/pratik227/static/blob/main/sponsors.svg'/>
  </a>
</p>

# Support

If this helped you in any way, you can contribute to this project for long term survival by supporting me:

### [💜 Support my open-source work on GitHub](https://github.com/sponsors/pratik227)

Be sure to check out my sponsor page.

Thank you so much!!!
# License
MIT (c) pratikpatelpp802@gmail.com
