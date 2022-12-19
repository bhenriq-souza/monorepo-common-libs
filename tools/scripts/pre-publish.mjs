
import chalk from 'chalk'
import { resolve } from 'path'
import { execSync } from 'child_process'
import { cwd, argv } from 'process'
import { appendFileSync, copyFileSync, existsSync } from 'fs'

console.info(
  chalk.bold.green('Initiating pre-publish script\n')
)

const [,, lib] = argv

const __root = cwd()

const FLAGS = {
  TOKEN: '--token'
}

/**
 * Validates a given condition
 * It will exit the process if the condition is not true
 * 
 * @param {any} condition 
 * @param {string} message 
 */
function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message))
    process.exit(1)
  }
}

/**
 * Check existing flag passed to the script and return its value, if exists.
 * It will exit the process if any flag doesn't exists
 * 
 * @param {string} flag 
 * @returns {string}
 */
function checkArgsFlagsAndValues(flag) {
  const flagIdx = argv.indexOf(flag)
  const value = flagIdx > -1 ? argv[flagIdx + 1] : undefined
  
  invariant(value, `${flag} arg should be provided`)

  return value
}

const npmrcPath = resolve(__root, '.npmrc')
invariant(existsSync(npmrcPath), '.npmrc file does not exists.')

console.log(npmrcPath)

const distPath = resolve(__root, 'dist/packages')
console.log(import.meta.url)

const distPathOutput = execSync(`ls -la ${libDistPath}`)
 
console.info(
  chalk.bold.green(`Content from ${distPath} path\n`)
)
console.info(
  chalk.bold.grey(distPathOutput)
)

invariant(existsSync(distPath), 'Build command should be ran in advance')


const libDistPath = `${distPath}/${lib}`
invariant(existsSync(libDistPath), 'Affected lib should be built in advance')

console.log(libDistPath)

const token = checkArgsFlagsAndValues(FLAGS.TOKEN)
const registryStr = `\n//npm.pkg.github.com/:_authToken=${token}`

console.log(token)

try {
  const npmrcDistPath = `${libDistPath}/.npmrc`
  copyFileSync(npmrcPath, npmrcDistPath)
  appendFileSync(npmrcDistPath, registryStr)

  const output = execSync(`ls -la ${libDistPath}`)
 
  console.info(
    chalk.bold.green(`Content from ${lib} dist path\n`)
  )
  console.info(
    chalk.bold.grey(output)
  )
} catch (error) {
  console.log(error)
  console.error(
    chalk.bold.red(`Error writting .npmrc file.`)
  )
}

console.info(
  chalk.bold.green('.npmrc file written to affected libs directories.')
)
