import * as acorn from 'acorn'
import fs from 'fs-extra'

export default async fileName => {
  const code = await fs.readFile(fileName)
  acorn.parse(code, {
    ecmaVersion: 5,
  })
}
