import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    terser(),
    copy({
      targets: [
        { src: 'src/manifest.json', dest: 'dist/' },
      ]
    })
  ]
}
