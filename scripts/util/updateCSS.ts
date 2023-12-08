import fs from "node:fs"
import path from "node:path"
import { packagesDir } from "../constants"

function getFontType(fileName: string) {
    if (fileName.endsWith(".ttf")) {
        return "truetype"
    }

    if (fileName.endsWith(".otf")) {
        return "opentype"
    }
}

export async function updateCSS(fontName: string) {
    const packageName = fontName
        .replace(/( \w)/g, match => "-" + match[1])
        .toLowerCase()

    const packagePath = path.normalize(path.resolve(packagesDir, packageName))

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
            weight: getFontWeigth(fileName),
            type: getFontType(fileName)
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
                `    src: url(${font.url}) format("${font.type}");`,
                `    font-style: ${font.style};`,
                `    font-weight: ${font.weight};`,
                "}"
            ].join("\n")
        }).join("\n\n")

    fs.writeFileSync(path.resolve(css_dir, "index.css"), css_content)

    // console.log("Done.")
    // console.log(`See: ${path.resolve(css_dir, "index.css")}`)
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