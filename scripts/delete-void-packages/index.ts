import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const void_packages_list_path = path.resolve(__dirname, "../find-void-packages/void-fonts.txt")

function getVoidPackages() {
    try {
        return fs
            .readFileSync(void_packages_list_path)
            .toString()
            .split("\n")
            .filter((value) => value.length)
    } catch (error) {
        console.error("Void fonts isn't provided")
        process.exit(1)
    }
}

function removeFromList(name: string) {
    const content = fs
        .readFileSync(void_packages_list_path)
        .toString()

    const regex = new RegExp(`${name}?\\n`, "g")

    fs.writeFileSync(void_packages_list_path, content.replace(regex, ""))
}

const voidPackages = getVoidPackages()

function unpublish(name: string) {
    try {
        const packageFullName = name.includes("@electron-fonts") ? name : `@electron-fonts/${name}`

        process.stdout.write(`Unpublishing ${packageFullName}...`)

        execSync(
            `npm unpublish ${packageFullName}`,
            { stdio: "ignore", cwd: process.cwd() }
        )

        console.log("  Done.")

        removeFromList(name)
    } catch (error) {
        console.log("An error ocurrend, aborted!")
    }
}

function deleteVoidPackages() {
    for (const packageName of voidPackages) {
        unpublish(packageName)
    }
}

deleteVoidPackages()