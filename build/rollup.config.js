import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import { babel } from "@rollup/plugin-babel"; // Transpile/polyfill with reasonable browser support
import { terser } from "rollup-plugin-terser"; // Minifies code

export default {
  input: "./index.js", // Path relative to package.json
  output: {
    name: "Typewriter",
    exports: "named",
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    babel({
      exclude: "node_modules/**",
      include: "**/*.js",
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"],
    }),
    ...(process.env.npm_config_minify ? [terser()] : []), // Minifies code only when --minify flag is set to true (currently only for iife format)
  ],
};
