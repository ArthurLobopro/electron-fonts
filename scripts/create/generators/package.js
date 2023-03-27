//@ts-check

const fs = require("fs")
const path = require("path")

/**
 * @param {string} packageName 
 * @param {string} packageDir 
 */
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

module.exports = {
    generatePackageJson
}