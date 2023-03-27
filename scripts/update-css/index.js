const fs = require("fs")
const path = require("path")

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

async function main(fontName) {
    const packageName = fontName
        .replace(/( \w)/g, match => "-" + match[1])
        .toLowerCase()

    const packagePath = path.normalize(path.resolve(__dirname, "../../packages/", packageName))

    const font_dir = path.resolve(packagePath, "fonts")

    const fontFiles = fs.readdirSync(font_dir)

    if (!fontFiles.length) {
        console.log("No fonts found.")
        return
    }

    const css_dir = path.resolve(packagePath, "css")

    const relative_dir = path.relative(css_dir, font_dir)

    const css_content = fontFiles.map(fileName => {
        return {
            name: fontName,
            url: path.join(relative_dir, fileName),
            style: getFontStyle(fileName),
            weight: getFontWeigth(fileName)
        }
    })
        .sort((a, b) => (
            a.weight === b.weight ? a.style.localeCompare(b.style) * -1 :
                a.weight - b.weight
        ))
        .map(font => {
            return [
                "@font-face {",
                `    font-family: "${font.name}";`,
                `    src: url(${font.url}) format("truetype");`,
                `    font-style: ${font.style};`,
                `    font-weight: ${font.weight};`,
                "}"
            ].join("\n")
        }).join("\n\n")

    fs.writeFileSync(path.resolve(css_dir, "index.css"), css_content)

    console.log("Done.")
    console.log(`See: ${path.resolve(css_dir, "index.css")}`)
    process.exit(0)
}

/**
 * @param {string} fontName
 */
function getFontStyle(fontName) {
    return fontName.toLowerCase().includes("italic") ? "italic" : "normal"
}

/**
 * @param {string} fontName
 */
function getFontWeigth(fontName) {
    const name = fontName.toLowerCase()

    return name.includes("thin") ? 100 :
        name.includes("extralight") ? 200 :
            name.includes("light") ? 300 :
                name.includes("regular") ? 400 :
                    name.includes("medium") ? 500 :
                        name.includes("semibold") ? 600 :
                            name.includes("bold") ? 700 :
                                name.includes("extrabold") ? 800 :
                                    name.includes("black") ? 900 :
                                        400
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

    if (!fs.existsSync(packageDir)) {
        console.error(`Package ${packageName} not found`)
        return false
    }

    return true
}


(
    async () => {
        const packageName = await getFontName()
        main(packageName)
    }
)()