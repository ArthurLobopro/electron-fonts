//@ts-check

const fs = require("fs")
const path = require("path")

/**
 * @param {string} packageName 
 * @param {string} packageDir 
 */
function generateReadme(packageName, packageDir) {
    const readmePath = path.resolve(packageDir, "README.md")

    const templateContent = fs.readFileSync(path.resolve(__dirname, "../readme-template.md"), "utf8")

    const readmeContent = templateContent
        .replace(/{{package-name}}/g, packageName)
        .replace(/{{package-name-pascal-case}}/g,
            packageName
                .replace(/^[a-z]/g, match => match.toUpperCase())
                .replace(/-([a-z])/g, match => match[1].toUpperCase()))


    fs.writeFileSync(readmePath, readmeContent)
}

module.exports = {
    generateReadme
}