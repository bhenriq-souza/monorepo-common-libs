import { readFileSync } from 'fs'
import { cwd, argv } from 'process'

const [, , lib] = argv

const __root = cwd()

const json = JSON.parse(readFileSync(`${__root}/packages/${lib}/package.json`).toString())
console.log(json.version)
