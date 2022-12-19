import { readFileSync } from 'fs'

const json = JSON.parse(readFileSync(`package.json`).toString())
console.log(json.version)
