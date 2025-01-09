import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/environment/sdk/index.ts',
  onwarn(warning, warn) {
    if (
      warning.code === 'CIRCULAR_DEPENDENCY' &&
      warning.ids.some((id) => id.includes('luxon'))
    ) {
      return
    }
    warn(warning)
  },
  plugins: [
    typescript({
      tsconfig: false,
      compilerOptions: {
        target: 'es6',
      },
      exclude: ['**/*.test.ts', './dist/**'],
    }),
    nodeResolve(),
    commonjs(),
  ],
  output: {
    file: './src/environment/sdk.js',
    format: 'iife',
  },
}
