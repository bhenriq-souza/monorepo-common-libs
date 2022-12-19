import { readFileSync } from 'fs'

const [, , lib] = argv

const __root = cwd()

const json = JSON.parse(readFileSync(`${__root}/packages/${lib}/package.json`).toString())
console.log(json.version)
