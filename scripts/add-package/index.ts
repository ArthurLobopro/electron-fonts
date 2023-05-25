import { execSync } from "child_process"
import download from "download"
import fs from "fs"
import os from "os"
import path from "path"
import { getArg } from "../Util"

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
    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} already exists`)
        return false
    }

    return true
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

    if (!validateFontName(fontName)) {
        console.log("Invalid font name.")
        return getFontName()
    }

    return fontName
}

async function main() {
    const fontName = await getFontName()

    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const packageDir = path.resolve(process.cwd(), "packages", packageName)

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

        execSync(
            `yarn generate --name="${fontName}"`,
            { cwd: process.cwd() }
        )

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

        execSync(
            `yarn update-css --name="${fontName}"`,
            { cwd: process.cwd() }
        )

        console.log("    Done.\n")

        // process.stdout.write("Creating commit...")

        // const relativePath = path.relative(process.cwd(), packageDir)

        // execSync(
        //     `git add ${relativePath} && git commit -m "feat: Added ${packageName} package"`,
        //     { cwd: process.cwd() }
        // )

        // console.log("    Done.\n")

        // console.log("Publishing package...")

        // execSync(
        //     "npm publish",
        //     {
        //         cwd: packageDir,
        //         stdio: "inherit"
        //     }
        // )

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