import { uglify } from 'rollup-plugin-uglify'
import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import cssfonts from 'postcss-fontpath'
import cssimport from 'postcss-import'
import cssurl from 'postcss-url'
import env from 'postcss-preset-env'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'

const ns = process.env.NS || 'WCUI'
const noCssTransform = process.env.SKIPCSS

const uglifyOptions = {
  toplevel: true,
  compress: {
    passes: 2,
  },
  output: {
    beautify: false,
  },
}

const shouldUglify = (options = uglifyOptions, minifier) => process.env.NODE_ENV === 'production' ? uglify(options, minifier) : []

const getModuleName = (it) => {
  const cmpts = it.split('/')

  return cmpts[cmpts.length === 1 ? 0 : (cmpts.length - 1)]
}

const copyPublicModules = (entries = []) => entries.reduce((acc, it) => {
  acc[it] = `public/${it}`

  return acc
}, {})

// eslint-disable-next-line multiline-ternary
const css = () => postcss(noCssTransform ? {} : {
  extract: true,
  modules: true,
  namedExports: function namedExports (name) {
    return `_$${name.replace(/-/g, '_')}`
    // return name.replace(/-/g, '$_$');
  },
  plugins: [
    cssimport({
      addModulesDirectories: ['node_modules'],
    }),
    cssurl({
      url: 'inline',
    }),
    cssfonts(),
    env(),
    autoprefixer(),
  ],
})

const commonPlugins = [
  nodeResolve(),
  svg(),
  css(),
  json(),
  cjs(),
]

export const es = entry => ({
  input: `lib/${entry}.js`,
  output: {
    file: `es/${getModuleName(entry)}.js`,
    format: 'es',
  },
  plugins: commonPlugins,
})

export const dist = (entry, name = ns) => ({
  input: `lib/${entry}.js`,
  output: {
    file: `dist/${getModuleName(entry)}.js`,
    format: 'umd',
    name,
  },
  plugins: commonPlugins.concat([babel(), shouldUglify()]),
})

export const polyfill = () => ({
  input: 'lib/polyfill.js',
  output: {
    file: 'dist/polyfill.js',
    format: 'iife',
  },
  plugins: [
    babel(),
    copy(copyPublicModules([
      'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
      'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
      'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js.map',
      'node_modules/core-js/client',
    ])),
    copy({ './fonts': 'public/fonts' }),
    nodeResolve(),
    shouldUglify(),
  ],
})
