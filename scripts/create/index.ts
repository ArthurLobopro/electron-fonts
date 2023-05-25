import fs from "fs"
import path from "path"
import { getArg } from "../Util"
import { generateFolders } from "./generators/folders"
import { generateIndexJs } from "./generators/index"
import { generatePackageJson } from "./generators/package"
import { generateReadme } from "./generators/readme"
import { generateTypings } from "./generators/typings"

function main(fontName: string) {
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

function validateFontName(fontName: string) {
    const packageName = String(fontName).toLowerCase().replace(/ /g, "-")

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return false
    }

    return true
}

function input(message = "", end = "\n"): Promise<string> {
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