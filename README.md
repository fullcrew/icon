# Material Design SVG Icons for Vue.js

[![npm](https://badgen.net/npm/v/@fullcrew/icon)](https://www.npmjs.org/package/@fullcrew/icon)
[![npm](https://badgen.net/npm/dm/@fullcrew/icon)](https://www.npmtrends.com/@fullcrew/icon)
[![npm bundle size](https://badgen.net/bundlephobia/min/@fullcrew/icon)](https://bundlephobia.com/result?p=@fullcrew/icon)
![license](https://badgen.net/npm/license/@fullcrew/icon)

[View the Demo](https://develop.fullcrew.io/elements/icon)

## Installation

```bash
# with npm
npm i @fullcrew/icon -S

# with yarn
yarn @fullcrew/icon -S
```

## Usage

>@vue/cli

```js
// src/main.js
import Vue from 'vue'
import Icon from '@fullcrew/icon'

Vue.use(Icon)
```

>nuxt.js

```js
// plugins/icons.js

import Vue from 'vue'
import Icon from '@fullcrew/icon'

Vue.use(Icon)

// nuxt.config.js
export default {
  plugins: [
    '~/plugins/icons'
  ]
}
```

`~/components/my-component.vue`

```vue
<template>
  <Icon name="mdiGithub" color="primary" size="medium" :rotate="45"/>
</template>

```

## Props

| Prop   | PropTypes | Details                        |
|--------|-----------|--------------------------------|
| name   | string    | For example: `mdiTwitter`         |
| size   | string    | `medium`, `small`, `large`     |
| color  | string    | `primary`, `danger`, `success` |
| rotate | number    | `45`, `90`, `180`              |

> Note: Additional props will be applied to the `<svg>` element.

## Styling

Applying a `color`, `size` and `rotate` attribute is usually the easiest solution. The example below demonstrates using SCSS to style the icons.

Example see [style.scss](./example/style.scss)

```scss
// For example <Icon name="mdiTwitter" color="twitter">
.icon.twitter {
  fill: #4099FF;
}
```

```scss
// For example <Icon name="mdiTwitter" size="big">
.icon.big {
  width: 1.5rem;
}
```

```scss
// For example <Icon name="mdiTwitter" :rotate="135">
.icon.rotate-18 {
  transform: rotate(135deg);
}
```
