import buildLib from './build-lib'
import buildModule from './build-module';
;(async () => {
  await Promise.all([
    buildLib(),
    buildModule()
  ])
  console.log('All done!')
})()
