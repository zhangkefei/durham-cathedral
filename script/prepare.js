const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const resolve = path.resolve

const rootDir = resolve()
const srcDir = resolve(rootDir, 'src')
const distDir = resolve(rootDir, 'dist')

createReadme()
updatePackageJSON()

function createReadme() {
    const distReadme = resolve(distDir, 'README.md')
    const readmePath = resolve(rootDir, 'README.md')
    if (fs.existsSync(readmePath)) {
        const readme = fs.readFileSync(readmePath)
        fs.writeFileSync(distReadme, readme)
    } else {
        const md = `
# README
        `
        fs.writeFileSync(distReadme, md)
    }
}

function updatePackageJSON() {
    const distPackage = resolve(distDir, 'package.json')
    if (!fs.existsSync(distPackage)) {
        console.log(chalk.red(`
[error]: The dist package.json file is not exist.
Please generate a package.json file by 'npm init' command.
        `));
        return
    }
    const rootPackage = resolve(rootDir, 'package.json')
    if (!fs.existsSync(rootPackage)) {
        console.log(chalk.red(`
[error]: The root package.json file is not exist.
Please generate a package.json file by 'npm init' command.
        `));
        return
    }
    const rootPkg = fs.readJSONSync(rootPackage)
    const distPkg = fs.readJSONSync(distPackage)
    const dependencies = rootPkg.dependencies
    distPkg.dependencies = dependencies
    distPkg.author = 'zhangkefei'

    fs.writeFileSync(distPackage, JSON.stringify(distPkg, null, 4))
}