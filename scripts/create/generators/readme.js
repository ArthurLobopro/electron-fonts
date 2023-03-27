//@ts-check

const fs = require("fs")
const path = require("path")

/**
 * @param {string} fontName 
 * @param {string} packageDir 
 */
function generateReadme(fontName, packageDir) {
    const readmePath = path.resolve(packageDir, "README.md")

    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const templateContent = fs.readFileSync(path.resolve(__dirname, "../readme-template.md"), "utf8")

    const readmeContent = templateContent
        .replace(/{{package-name}}/g, packageName)
        .replace(/{{font-name-without-spaces}}/g, fontName.replace(/ /g, ""))


    fs.writeFileSync(readmePath, readmeContent)
}

module.exports = {
    generateReadme
}