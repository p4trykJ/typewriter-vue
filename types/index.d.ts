declare module 'typewriter-vue' {
  import { VueConstructor } from 'vue';

  interface ReplaceInterface {
    from: string,
    to: string
  }

  interface TypewriterProps {
    startDelay: number;
    typeInterval: number,
    replace: Array<ReplaceInterface>,
    replaceInterval: number,
  }

  interface TypewriterConstructor extends VueConstructor {
    props: TypewriterProps;
  }

  const Typewriter: TypewriterConstructor;

  export {
    Typewriter,
    TypewriterConstructor,
    TypewriterProps,
  }
  export default Typewriter;
}
