//@ts-check

import fs from "fs"
import path from "path"

export function generateReadme(fontName: string, packageDir: string) {
    const readmePath = path.resolve(packageDir, "README.md")

    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const templateContent = fs.readFileSync(path.resolve(__dirname, "../readme-template.md"), "utf8")

    const readmeContent = templateContent
        .replace(/{{package-name}}/g, packageName)
        .replace(/{{font-name-without-spaces}}/g, fontName.replace(/ /g, ""))


    fs.writeFileSync(readmePath, readmeContent)
}