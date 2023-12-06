import fs from "fs"
import path from "path"
import { getPackageName } from "../Util"
import { generateFolders } from "./generators/folders"
import { generateIndexJs } from "./generators/index"
import { generatePackageJson } from "./generators/package"
import { generateReadme } from "./generators/readme"
import { generateTypings } from "./generators/typings"

export function generatePackage(fontName: string, version: string) {
    const packageName = getPackageName(fontName)

    const packageDir = path.resolve(__dirname, "../../packages", packageName)

    if (fs.existsSync(packageDir)) {
        fs.rmSync(packageDir, { recursive: true })
    }

    fs.mkdirSync(packageDir)

    generateReadme(fontName, packageDir)
    generatePackageJson(fontName, packageDir, version)
    generateIndexJs(packageDir)
    generateTypings(packageName, packageDir)
    generateFolders(packageDir)
}