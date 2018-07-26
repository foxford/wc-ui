import { uglify } from 'rollup-plugin-uglify'
import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import env from 'postcss-preset-env'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import svg from 'rollup-plugin-svg'

const entry = process.env.entry || 'index'
const isprod = () => process.env.NODE_ENV === 'production'

const copyModule = (m, to = 'public', nm = 'node_modules') => ({ [`${nm}/${m}`]: `${to}/${nm}/${m}` })

const commonPlugins = [resolve(), postcss({ plugins: [env(), autoprefixer()] }), svg()]

const maybeUglify = () => isprod() ? uglify() : []

const polyfill = () => ({
  input: 'lib/polyfill.js',
  output: {
    file: 'dist/polyfill.js',
    format: 'iife',
  },
  plugins: [resolve(), babel(), maybeUglify()],
})

const es = () => ({
  input: `lib/${entry}.js`,
  output: {
    file: `es/${entry}.js`,
    format: 'es',
  },
  plugins: commonPlugins.concat(cjs()),
})

const dist = (name = 'WCUI') => ({
  input: `lib/${entry}.js`,
  output: {
    file: `dist/${entry}.js`,
    format: 'umd',
    name,
  },
  plugins: commonPlugins
    .concat([babel(), copy(copyModule('@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')), maybeUglify()]),
})

export default [polyfill(), es(), dist()]
