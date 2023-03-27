//@ts-check

const path = require("path")
const fs = require("fs")
const { generateTypings } = require("./generators/typings.js")
const { generateFolders } = require("./generators/folders.js")
const { generateIndexJs } = require("./generators/index.js")
const { generatePackageJson } = require("./generators/package.js")
const { generateReadme } = require("./generators/readme.js")

function main(packageName) {
    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return process.exit(1)
    }

    fs.mkdirSync(packageDir)

    generateReadme(packageName, packageDir)
    generatePackageJson(packageName, packageDir)
    generateIndexJs(packageDir)
    generateTypings(packageName, packageDir)
    generateFolders(packageDir)
}

function getArg(argName) {
    const arg = process.argv.find(arg => arg.startsWith(argName)) || null
    return (arg && arg.split("=")[1]) || null
}

const packageName = getArg("--name")

if (!packageName) {
    inputPackageName()
} else {
    main(packageName)
}

function inputPackageName() {
    console.log("Package name: ")
    process.stdin.once("data", data => {
        const refinedData = data.toString().trim().toLowerCase().replace(/ /g, "-").replace(/\\n/g, "")

        if (refinedData.length) {
            main(refinedData)
            process.exit(0)
        } else {
            console.error("Package name is required")
            inputPackageName()
        }
    })
}
