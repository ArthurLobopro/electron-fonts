import fs from "node:fs"
import path from "node:path"

export const base_version = "1.1.0"
export const root = path.resolve(__dirname, "../")
export const packagesDir = path.resolve(root, "packages")

export const api_key = fs.readFileSync(path.join(root, "apikey.txt"), "utf8")

export const google_fonts_request = `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`

export const axios_options = {
    headers: {
        "Accept": "application/json"
    }
}

if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir)
}