const path = require("path")
const { injectCSS } = require("electron-css-injector")

const cssPath = path.resolve(__dirname, "./css/import.css")

module.exports = Object.freeze({
    path: cssPath,
    inject: () => injectCSS(cssPath),
})