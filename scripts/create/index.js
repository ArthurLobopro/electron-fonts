const path = require("path")
const fs = require("fs")

function main(packageName) {
    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return process.exit(1)
    }

    fs.mkdirSync(packageDir)

    generateReadme(packageName, packageDir)
    generatePackageJson(packageName, packageDir)
    geerateIndexJs(packageDir)
    generateTypings(packageName, packageDir)
    generateFolders(packageDir)
}

function generateFolders(packageDir) {
    const folders = [
        "css",
        "fonts"
    ]

    folders.forEach(folder => {
        fs.mkdirSync(path.resolve(packageDir, folder))
    })

    fs.writeFileSync(path.resolve(packageDir, "css", "index.css"), "")
}

function geerateIndexJs(packageDir) {
    const indexJsPath = path.resolve(packageDir, "index.js")

    const indexJsContent = `const path = require("path")
    const { injectCSS } = require("electron-css-injector")
    
    const cssPath = path.resolve(__dirname, "./css/index.css")
    
    module.exports = Object.freeze({
        path: cssPath,
        inject: () => injectCSS(cssPath),
    })`

    fs.writeFileSync(indexJsPath, indexJsContent)
}

function generateTypings(packageName, packageDir) {
    const typing_path = path.resolve(packageDir, "index.d.ts")

    const typing_content = `
    declare module "@electron-fonts/${packageName}" {
        export const path: string
        export function inject(): void
    }`

    fs.writeFileSync(typing_path, typing_content)
}

function generateReadme(packageName, packageDir) {
    const readmePath = path.resolve(packageDir, "README.md")

    const templateContent = fs.readFileSync(path.resolve(__dirname, "readme-template.md"), "utf8")

    const readmeContent = templateContent
        .replace(/{{package-name}}/g, packageName)
        .replace(/{{package-name-pascal-case}}/g,
            packageName
                .replace(/^[a-z]/g, match => match.toUpperCase())
                .replace(/-([a-z])/g, match => match[1].toUpperCase()))


    fs.writeFileSync(readmePath, readmeContent)
}

function generatePackageJson(packageName, packageDir) {
    const packageJsonPath = path.resolve(packageDir, "package.json")

    const fontName = packageName
        .replace(/^[a-z]/g, match => match.toUpperCase())
        .replace(/-[a-z]/g, match => " " + match[1].toUpperCase())

    const packageJsonContent = {
        "name": `@electron-fonts/${packageName}`,
        "author": "Arthur Lobo",
        "version": "1.0.0",
        "license": "MIT",
        "description": `${fontName} font injector to electron aplications.`,
        "keywords": [
            "electron",
            "css",
            "inject",
            "font",
            fontName
        ],
        "main": "index.js",
        "typings": "index.d.ts",
        "publishConfig": {
            "access": "public"
        },
        "dependencies": {
            "electron-css-injector": "^1.0.0"
        }
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 4))
}

function getArg(argName) {
    return process.argv.find(arg => arg.startsWith(argName)).split("=")[1] || null
}

const packageName = getArg("--name")

if (!packageName) {
    console.error("Please provide a package name")
    process.exit(1)
}

main(packageName)