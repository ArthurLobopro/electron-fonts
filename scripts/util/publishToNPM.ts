import { execSync } from "child_process"

export function publishToNPM(packageDir: string, dry = false) {
    execSync(
        `npm publish ${dry ? "--dry-run" : ""}`,
        {
            cwd: packageDir,
            stdio: "inherit"
        }
    )
}