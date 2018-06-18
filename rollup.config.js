import svg from 'rollup-plugin-svg'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const entry = process.env.entry || 'index'

export default {
  input: `lib/${entry}.mjs`,
  output: {
    file: `es/${entry}.js`,
    format: 'es',
  },
  plugins: [
    resolve(),
    svg(),
    cjs({
      extensions: ['.js', '.mjs'],
    }),
  ],
}
