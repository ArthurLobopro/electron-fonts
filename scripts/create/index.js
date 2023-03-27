//@ts-check

const path = require("path")
const fs = require("fs")
const { generateTypings } = require("./generators/typings.js")
const { generateFolders } = require("./generators/folders.js")
const { generateIndexJs } = require("./generators/index.js")
const { generatePackageJson } = require("./generators/package.js")
const { generateReadme } = require("./generators/readme.js")

function main(fontName) {
    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return process.exit(1)
    }

    fs.mkdirSync(packageDir)

    generateReadme(fontName, packageDir)
    generatePackageJson(fontName, packageDir)
    generateIndexJs(packageDir)
    generateTypings(packageName, packageDir)
    generateFolders(packageDir)
}

function getArg(argName) {
    const arg = process.argv.find(arg => arg.startsWith(argName)) || null
    return (arg && arg.split("=")[1]) || null
}

let argAlreadyVerified = false

async function getFontName() {

    if (!argAlreadyVerified) {
        const fontName = getArg("--name")

        argAlreadyVerified = true

        if (fontName !== null) {
            if (validateFontName(fontName)) {
                return fontName
            } else {
                return getFontName()
            }
        }
    }

    const fontName = await input("Font name: ")

    console.log(fontName)

    if (!validateFontName(fontName)) {
        console.log("Invalid font name.")
        return getFontName()
    }

    return fontName
}

function validateFontName(fontName) {
    const packageName = String(fontName).toLowerCase().replace(/ /g, "-")

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return false
    }

    return true
}

/**
 * @param {string} message
 * @param {string} end
 * @returns {Promise<string>}
 */
function input(message = "", end = "\n") {
    process.stdout.write(message)
    process.stdout.write(end)

    return new Promise(res => {
        process.stdin.once("data", data => {
            res(data.toString().trim())
        })
    })
}

(async () => {
    const fontName = await getFontName()

    main(fontName)
})()