//@ts-check

const fs = require("fs")
const path = require("path")

/**
 * @param {string} packageDir 
 */
function generateIndexJs(packageDir) {
    const indexJsPath = path.resolve(packageDir, "index.js")

    const indexJsContent = [
        `const path = require("path")`,
        `const { injectCSS } = require("electron-css-injector")`,
        ``,
        `const cssPath = path.resolve(__dirname, "./css/index.css")`,
        ``,
        `module.exports = Object.freeze({`,
        `    path: cssPath,`,
        `    inject: () => injectCSS(cssPath),`,
        `})`
    ].join("\n")

    fs.writeFileSync(indexJsPath, indexJsContent)
}

module.exports = {
    generateIndexJs
}