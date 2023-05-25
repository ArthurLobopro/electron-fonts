import fs from "fs"
import path from "path"

export function generateFolders(packageDir: string) {
    const folders = [
        "css",
        "fonts"
    ]

    folders.forEach(folder => {
        fs.mkdirSync(path.resolve(packageDir, folder))
    })

    fs.writeFileSync(path.resolve(packageDir, "css", "index.css"), "")
}