import { execSync } from "child_process"
import { argExists } from "../Util"

interface publishToNPMOptions {
    dry?: boolean
    stdio?: "inherit" | "ignore"
}

const default_dry = argExists("--dry")

export function publishToNPM(packageDir: string, options: publishToNPMOptions = {}) {
    const {
        dry = default_dry,
        stdio = "ignore"
    } = options


    execSync(
        `npm publish ${dry ? "--dry-run" : ""}`,
        {
            cwd: packageDir,
            stdio
        }
    )
}