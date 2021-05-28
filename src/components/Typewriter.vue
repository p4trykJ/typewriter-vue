<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Typewriter",
  props: {
    interval: {
      type: Number,
      default: 75,
    },
    replaceInterval: {
      type: Number,
      default: 75,
    },
    replace: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.typewriter(this.$el.innerHTML);
      if (this.replace?.length) {
        setTimeout(() => {
          this.startReplacing();
        }, this.replaceInterval);
      }
    },
    typewriter(str) {
      return new Promise((resolve) => {
        this.$el.innerHTML = "";
        const f = (index) => {
          const current = str[index];
          index = current === "<" ? str.indexOf(">", index) + 1 : ++index;
          this.$el.innerHTML = str.substr(0, index);
          if (index < str.length - 1) {
            setTimeout(f, this.interval, index);
            return;
          }
          resolve();
        };
        f(0);
      });
    },
    removeString(start, end) {
      return new Promise((resolve) => {
        const elementCopy = this.$el;
        const f = (index) => {
          elementCopy.innerHTML = elementCopy.innerHTML.slice(0, index);
          index--;
          if (start <= index) {
            setTimeout(f, this.interval, index);
            return;
          }
          resolve();
        };
        f(end - 1);
      });
    },
    addString(start, str) {
      return new Promise((resolve) => {
        const elementCopy = this.$el;
        const f = (index, start) => {
          elementCopy.innerHTML = this.insert(
            elementCopy.innerHTML,
            start,
            str[index]
          );
          if (index < str.length - 1) {
            setTimeout(f, this.interval, ++index, ++start);
            return;
          }
          resolve();
        };
        f(0, start);
      });
    },
    insert(text, index, newChar) {
      return text.substring(0, index) + newChar + text.substr(index);
    },
    async replaceText(changed) {
      if (!changed) {
        throw new Error("Changed parameter is needed");
      }
      const { from, to } = changed;
      const str = this.$el.innerHTML;
      const regex = new RegExp("\\b" + from + "\\b");
      const { index } = str.match(regex);
      await this.removeString(index, index + from.length);
      await this.addString(index, to);
    },
    startReplacing(replace = this.replace, interval = this.replaceInterval) {
      if (!replace) {
        throw new Error("replace parameter is needed");
      }
      if (!replace) {
        throw new Error("replace parameter has 0 length");
      }
      return new Promise((resolve) => {
        const func = async (index) => {
          await this.replaceText(replace[index]);
          if (index < replace.length - 1) {
            setTimeout(func, interval, ++index);
            return;
          }
          resolve();
        };
        func(0);
      });
    },
  },
};
</script>

<style>
@keyframes blink {
  from,
  to {
    color: black;
  }
  50% {
    color: transparent;
  }
}

.content *:last-child:after {
  height: 110%;
  content: "|";
  animation: blink 0.75s step-end infinite;
}
</style>
