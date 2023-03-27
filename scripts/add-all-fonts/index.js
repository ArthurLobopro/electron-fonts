//@ts-check

const fs = require("fs")
const path = require("path")
const axios = require("axios").default
const { execSync } = require("child_process")

const api_key = fs.readFileSync(path.join(process.cwd(), "apikey.txt"), "utf8")

const packagesDir = path.resolve(__dirname, "../../packages")

const existingPackages = fs.readdirSync(packagesDir)

function getPackageName(fontName) {
    return String(fontName).toLowerCase().replace(/ /g, "-")
}

axios.get(
    `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`,
    {
        headers: {
            "Accept": "application/json"
        }
    }
).then(res => {
    console.log(res)

    const fontNames = res.data.items
        .map(font => {
            return (font.family)
        })
        .filter(font => !existingPackages.includes(getPackageName(font)))

    fontNames.forEach(font => {
        process.stdout.write(`Adding "${font}"...`)
        execSync(
            `node scripts/add-package/index.js --name="${font}"`,
            {
                cwd: process.cwd()
            }
        )
        console.log("    Done.")
    })

    process.exit(0)
})