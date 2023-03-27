//@ts-check

const path = require("path")
const fs = require("fs")

/**
 * @param {string} packageDir 
 */
function generateFolders(packageDir) {
    const folders = [
        "css",
        "fonts"
    ]

    folders.forEach(folder => {
        fs.mkdirSync(path.resolve(packageDir, folder))
    })

    fs.writeFileSync(path.resolve(packageDir, "css", "index.css"), "")
}

module.exports = {
    generateFolders
}