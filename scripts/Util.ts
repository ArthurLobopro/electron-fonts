import fs from "node:fs"
import path from "node:path"

export const api_key = fs.readFileSync(path.join(process.cwd(), "apikey.txt"), "utf8")

export const packagesDir = path.resolve(process.cwd(), "packages")

if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir)
}

export function getPackageName(fontName: string) {
    return fontName.toLowerCase().replace(/ /g, "-")
}

export function getArgValue(argName: string) {
    const arg = process.argv.find(arg => arg.startsWith(argName)) || null
    return (arg && arg.split("=")[1]) || null
}

export function argExists(argName: string) {
    return process.argv.some(arg => arg === argName)
}