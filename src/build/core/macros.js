import pkgJSON from '../../../package.json'

const parts = pkgJSON.version.split('.')

const PKG_VERSION = JSON.stringify(pkgJSON.version)
const MAIN_VERSION = JSON.stringify(parts[0])
const SUB_VERSION = JSON.stringify(parts[0] + '.' + parts[1])

export default {
  PKG_VERSION,
  MAIN_VERSION,
  SUB_VERSION,
}
