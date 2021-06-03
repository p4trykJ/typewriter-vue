# typewriter-vue

![npm](https://img.shields.io/npm/dw/typewriter-vue)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/p4trykJ/typewriter-vue/npm)

![npm](https://img.shields.io/npm/v/typewriter-vue)

![npm bundle size](https://img.shields.io/bundlephobia/min/typewriter-vue)

Typing effect component for Vue.js

<iframe src="https://codesandbox.io/embed/typewriter-vue-basic-usage-5w3fb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="typewriter-vue-basic-usage"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

TUTAJ KURDE GIF Z PREZKĄ

### Features & characteristics:

- NO dependencies,
- multiline support,
- substring replacement (carousel),
- on demand replacement,
- text CSS customization,
- blinking cursor customization.

## Install & basic usage

```bash
npm install typewriter-vue
```

```vue
<template>
  <div id="app">
    <typewriter
      :replace="replace"
      :type-interval="100"
      :replace-interval="1000"
    >
      <div>Typewriter Vue</div>
    </typewriter>
  </div>
</template>

<script>
import Typewriter from "typewriter-vue";

export default {
  name: "App",
  components: {
    Typewriter,
  },
  data: () => ({
    replace: [
      { from: "Vue", to: "React?" },
      { from: "Typewriter React?", to: "Joking, it`s Vue!" },
    ],
  }),
};
</script>
```

## CodeSanbox

[Example CodeSanbox](https://codesandbox.io/s/typewriter-vue-basic-usage-5w3fb) – Use this for issue reproduction.

## Examples

### Single select / dropdown

## API

#### slots

- `default`

#### props

- `start-delay` **_Number_** (_optional_)

  Time to wait before typing first character (ms).

- `type-interval` **_Number_** (_optional_) `default: 75`

  Interval between entering letters (ms).

- `replace` \*\*\*String to be replaced (has to be present in currently displayed text),
- to -*\*\* (*optional\*) `default: [object Object]`

  Array of objects with keys:

  - from -

- `replace-interval` **_Number_** (_optional_) `default: 2000`

  typeInterval between replacing in (ms).

<!-- #### methods

- `init()`

- `typewriter(str)`

- `removeString(start, end)`

- `addString(start, str)`

- `insert(text, index, newChar)`

- `replaceLastWord(to)`

- `replaceText(changed)`

- `startReplacing(, )` -->
