import fs from "node:fs"
import path from "node:path"

export function generatePackageJson(fontName: string, packageDir: string, version = "1.0.0") {
    const packageJsonPath = path.resolve(packageDir, "package.json")

    const packageName = fontName.toLowerCase().replace(/ /g, "-")

    const packageJsonContent = {
        "name": `@electron-fonts/${packageName}`,
        "author": "Arthur Lobo",
        version,
        "license": "MIT",
        "description": `${fontName} font injector to electron aplications.`,
        "keywords": [
            "electron",
            "css",
            "inject",
            "font",
            fontName
        ],
        "main": "index.js",
        "typings": "index.d.ts",
        "publishConfig": {
            "access": "public"
        },
        "dependencies": {
            "electron-css-injector": "1.2.0"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/ArthurLobopro/electron-fonts.git"
        },
        "bugs": {
            "url": "https://github.com/ArthurLobopro/electron-fonts/issues"
        },
        "homepage": "https://github.com/ArthurLobopro/electron-fonts#readme"
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 4))
}