import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'

const bundle = (config) => ({
  input: './src/index.ts',
  ...config,
})

export default [
  bundle({
    plugins: [
      typescript({
        tsconfig: false,
        exclude: ['**/*.test.ts', './dist/**'],
        compilerOptions: {
          target: 'es6',
        },
      }),
      replace({
        include: './src/environment/run-script.*',
        values: { 'process.env.JEST_AIRTABLE_TS_DEV': JSON.stringify(false) },
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
      json(),
    ],
    output: {
      file: './dist/index.js',
      format: 'cjs',
    },
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
  }),
  {
    input: './src/environment/sdk.js',
    output: {
      file: './dist/sdk.js',
    },
  },
]
