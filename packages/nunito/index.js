const path = require("path")
const cssPath = path.resolve(__dirname, "./css/import.css")

/**
 * @param {string} path
 */
function injectFont() {
    const links = Array.from(document.querySelectorAll("link"))
    const css_exists = links.find(link => {
        return (
            path.normalize(link.getAttribute('href')).replace(/file:\\\\/g, "") ===
            path.normalize(cssPath)
        )
    })

    if (!css_exists) {
        const css = document.createElement('link')
        css.rel = "stylesheet"
        css.href = cssPath
        document.head.appendChild(css)
    }
}

module.exports = {
    path: cssPath,
    inject: injectFont
}