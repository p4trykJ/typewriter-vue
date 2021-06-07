# typewriter-vue

![npm](https://img.shields.io/npm/dw/typewriter-vue) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/p4trykJ/typewriter-vue/npm) ![npm](https://img.shields.io/npm/v/typewriter-vue) ![npm bundle size](https://img.shields.io/bundlephobia/min/typewriter-vue)

Typing effect component for Vue.js

![Example](https://github.com/p4trykJ/typewriter-vue/blob/master/docs/example.gif)

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

[CodeSandbox](https://codesandbox.io/s/typewriter-vue-basic-usage-5w3fb)

## Examples

### Replace on demand

```vue
<template>
  <div id="app">
    <button @click="replaceOnClick">Click to replace</button>
    <typewriter ref="typewriter">
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
  methods: {
    replaceOnClick() {
      this.$refs.typewriter.replaceText({
        from: "Typewriter Vue",
        to: "Typing effect component for Vue",
      });
    },
  },
};
</script>
```

[CodeSandbox](https://codesandbox.io/s/typewriter-vue-replace-on-demand-erv9b)

### Replace last word on demand

```vue
<template>
  <div id="app">
    <button @click="replaceOnClick">Click to replace last word</button>
    <typewriter ref="typewriter">
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
  methods: {
    replaceOnClick() {
      this.$refs.typewriter.replaceLastWord("Vue.js");
    },
  },
};
</script>
```

[CodeSandbox](https://codesandbox.io/s/typewriter-vue-replace-last-word-on-demand-jos41)

### Text CSS customization

```vue
<template>
  <div id="app">
    <typewriter class="typewriter" :type-interval="100">
      <div style="font-size: 30px; color: red; text-decoration: underline">
        Typewriter Vue
      </div>
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
};
</script>
```

[CodeSandbox](https://codesandbox.io/s/typewriter-vue-text-customization-c51so)

### Cursor customization

```vue
<template>
  <div id="app">
    <typewriter
      class="typewriter"
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
      {
        from: "Typewriter Vue",
        to: "Typing effect component for Vue",
      },
    ],
  }),
};
</script>

<style>
.typewriter.content *:last-child::after {
  font-size: calc(3em + 20px) !important;
}
</style>
```

[CodeSandbox](https://codesandbox.io/s/typewriter-vue-cursor-stylization-5w3fb)

## API

#### props

- `type-interval` **_Number_** (_optional_) `default: 75`

  Interval between entering letters (ms).

- `replace` **_Array_** (_optional_) `default: []`

  Array of objects containing information about strings to be replaced. Object structure:

  - from - **_String_** to be replaced,
  - to - **_String_** that will replace 'from' value

- `replace-interval` **_Number_** (_optional_) `default: 2000`

  Interval between replacing in (ms).
