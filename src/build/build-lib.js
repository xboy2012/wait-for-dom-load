import { rollup } from 'rollup'
import { ROOT_DIR } from '../core/configs'
import babel from 'rollup-plugin-babel'
import checkEsVersion from '../core/checkEsVersion'

export default async () => {
  console.log('building lib...')
  const bundle = await rollup({
    input: `${ROOT_DIR}/src/core/waitForDomLoad.js`,
    plugins: [
      babel(),
    ],
  })
  await bundle.write({
    file: `${ROOT_DIR}/dist/index.js`,
    format: 'cjs',
    sourcemap: true,
    strict: false,
  })
  try {
    await checkEsVersion(`${ROOT_DIR}/dist/index.js`)
  } catch (e) {
    throw Error('/dist/index.js is not es5')
  }
  console.log('lib built successfully')
}
