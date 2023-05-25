import fs from "fs"
import path from "path"

export function generateTypings(packageName: string, packageDir: string) {
    const typing_path = path.resolve(packageDir, "index.d.ts")

    const typing_content = [
        `declare module "@electron-fonts/${packageName}" {`,
        `    export const path: string`,
        `    export function inject(): void`,
        `}`
    ].join("\n")

    fs.writeFileSync(typing_path, typing_content)
}