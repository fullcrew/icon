import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'

export default [
  // ES module
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/icon.esm.mjs'
    },
    plugins: [json(), vue()]
  },
  // Common JS
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/icon.cjs.js'
    },
    plugins: [json(), vue()]
  }
]
