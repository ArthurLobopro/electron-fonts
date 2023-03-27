//@ts-check

const path = require("path")
const fs = require("fs")

/**
 * @param {string} packageName 
 * @param {string} packageDir 
 */
function generateTypings(packageName, packageDir) {
    const typing_path = path.resolve(packageDir, "index.d.ts")

    const typing_content = [
        `declare module "@electron-fonts/${packageName}" {`,
        `    export const path: string`,
        `    export function inject(): void`,
        `}`
    ].join("\n")

    fs.writeFileSync(typing_path, typing_content)
}

module.exports = {
    generateTypings
}