<template>
  <div id="app">
    <div>
      <button @click="changeVueToAngular">change Vue To Angular</button>
    </div>
    <div>
      <button @click="changeLastWord">change Last Word</button>
    </div>
    <typewriter ref="typewriter" :start-delay="2000">
      <div>Typewriter Vue</div>
    </typewriter>
  </div>
</template>

<script>
import Typewriter from "./components/Typewriter.vue";

export default {
  name: "App",
  components: {
    Typewriter,
  },
  methods: {
    changeVueToAngular() {
      this.$refs.typewriter.replaceText({ from: "Vue", to: "Angular" });
    },
    changeLastWord() {
      this.$refs.typewriter.replaceLastWord("React?");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
