import { rollup } from 'rollup'
import { ROOT_DIR } from '../core/configs'
import babel from 'rollup-plugin-babel'

export default async () => {
  console.log('building module...')
  const bundle = await rollup({
    input: `${ROOT_DIR}/src/core/waitForDomLoad.js`,
    plugins: [
      babel(),
    ],
  })
  await bundle.write({
    file: `${ROOT_DIR}/dist/index.module.js`,
    format: 'esm',
    sourcemap: true,
    strict: false,
  })
  console.log('module built successfully')
}
