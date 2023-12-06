import download from "download"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { getArgValue, getPackageName } from "../Util"
import { base_version, root } from "../constants"
import { generatePackage } from "../create"
import { publishToNPM } from "../util/publishToNPM"
import { updateCSS } from "../util/updateCSS"

function input(message: string = "", end: string = "\n"): Promise<string> {
    process.stdout.write(message)
    process.stdout.write(end)

    return new Promise(res => {
        process.stdin.once("data", data => {
            res(data.toString().trim())
        })
    })
}

function validateFontName(fontName: string) {
    const packageName = getPackageName(fontName)

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        // return false
    }

    return true
}

let argAlreadyVerified = false

async function getFontName() {

    if (!argAlreadyVerified) {
        const fontName = getArgValue("--name")

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

    if (!validateFontName(fontName)) {
        console.log("Invalid font name.")
        return getFontName()
    }

    return fontName
}

async function main() {
    const fontName = await getFontName()
    const version = getArgValue("--version") || base_version

    const packageName = getPackageName(fontName)

    const packageDir = path.resolve(root, "packages", packageName)

    try {
        const fontUrl = `https://fonts.google.com/download?family=${fontName.replace(/ /g, "%20")}`

        const savePath = path.resolve(os.tmpdir(), "fonts", fontName)

        await download(fontUrl, savePath, { extract: true })

        console.log(`Downloaded "${fontName}" to "${savePath}\n"`)

        const fontDir = fs.readdirSync(savePath)

        const files = fontDir.includes("static") ?
            fs.readdirSync(path.resolve(savePath, "static"))
                .filter(file => file.endsWith(".ttf"))
                .map(file => path.resolve(savePath, "static", file)) :
            fontDir.filter(file => file.endsWith(".ttf"))
                .map(file => path.resolve(savePath, file))

        console.log(`Found ${files.length} font files\n`)

        process.stdout.write("Creating package dir...")

        generatePackage(fontName, version)

        console.log("    Done.\n")

        const fontDirPath = path.resolve(packageDir, "fonts")

        process.stdout.write("Copying font files...")

        files.forEach(file => {
            fs.copyFileSync(
                file,
                path.resolve(fontDirPath, path.basename(file))
            )
        })

        console.log("    Done.\n")

        process.stdout.write("Updating CSS...")

        await updateCSS(fontName)

        console.log("    Done.")

        process.stdout.write("Publishing package...")

        publishToNPM(packageDir, { stdio: "inherit" })

        console.log("  Done.")


        process.exit(0)

    } catch (error) {
        console.error("An error occurred:")
        console.error(error)

        if (fs.existsSync(packageDir)) {
            console.log("Removing package dir...")

            fs.rmSync(packageDir, { recursive: true })
        }

        process.exit(1)
    }
}

main()