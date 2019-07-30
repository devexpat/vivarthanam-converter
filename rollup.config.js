import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  input: 'lib/vivarthanam-converter.js',
  plugins: [
    babel(babelrc())
  ],
  external: external,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourceMap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourceMap: true
    }
  ]
}
