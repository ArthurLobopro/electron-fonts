import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { getNextPatchVersion } from "../Util"
import { root } from "../constants"
import { getPackageData } from "../util/getPackageData"
import { PackageRegistry } from "../util/types"

function getVoidPackages() {
    try {
        return fs
            .readFileSync(path.resolve(__dirname, "../find-void-packages/void-fonts.txt"))
            .toString()
            .split("\n")
    } catch (error) {
        console.error("Void fonts isn't provided")
        process.exit(1)
    }
}

const void_packages = getVoidPackages()

function unpublish(name: string) {
    execSync(
        `npm unpublish ${name}`,
        { stdio: "inherit" }
    )
}

async function fixVoidPackages() {
    for (const package_name of void_packages) {
        const packageData = getPackageData(package_name) as unknown as PackageRegistry

        const versionsToDelete =
            Object.entries(packageData.versions)
                .filter(([version]) => version.match(/^\d+\.\d+\.\d+$/))

        const { name, "dist-tags": { latest } } = packageData

        const fontName = packageData.versions[latest].keywords.at(-1)
        const next_version = getNextPatchVersion(latest)

        process.stdout.write(`Updating "${fontName}"...`)

        execSync(
            [
                "npm run add-package --",
                `--name="${fontName}"`,
                `--version="${next_version}"`,
            ].join(" "),
            {
                stdio: "ignore",
                cwd: root
            }
        )

        console.log("  Done!")

        for (const versionToDelete of versionsToDelete) {
            const fullName = `${name}@${versionToDelete}`

            process.stdout.write(`Unpublishing "${fullName}"...`)

            unpublish(fullName)

            console.log("  Done!")
        }
    }
}

fixVoidPackages()