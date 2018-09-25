import babel from 'rollup-plugin-babel';
import livereload from 'rollup-plugin-livereload';

const external = ['jquery']

const plugins = [
  babel({
    exclude: 'node_modules/**'
  }),
  livereload('dist')
]

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: 'ni'
  },
  external,
  plugins,
  watch: {
    clearScreen: false
  }
}
