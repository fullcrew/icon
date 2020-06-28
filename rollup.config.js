import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import pkg from './package.json'

export default [
  // ES module
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: pkg.module
    },
    plugins: [json(), vue()]
  },
  // Common JS
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: pkg.main
    },
    plugins: [json(), vue()]
  }
]
