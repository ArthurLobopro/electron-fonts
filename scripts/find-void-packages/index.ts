import axios from "axios"
import { execSync } from "child_process"
import { getPackageName } from "../Util"
import { axios_options, google_fonts_request } from "../constants"
import { getPackageData } from "../util/getPackageData"

function findVoidPackages(onlyLatest: boolean = true) {
    axios.get(
        google_fonts_request,
        axios_options
    )
        .then(async res => {
            const fontNames = res.data.items
                .map(font => font.family)

            if (onlyLatest) {
                for (const name of fontNames) {
                    const packageName = getPackageName(name)
                    const packageData = await getPackageData(packageName, "latest")

                    if (typeof packageData !== "string") {
                        const {
                            dist: { fileCount }
                        } = packageData

                        if (fileCount <= 5) {
                            execSync(
                                `echo "${packageName}" >> void-fonts.txt`,
                                { cwd: __dirname }
                            )
                        }
                    }
                }
            } else {
                for (const name of fontNames) {
                    const packageName = getPackageName(name)
                    const packageData = await getPackageData(packageName)

                    if (typeof packageData !== "string") {
                        const {
                            versions
                        } = packageData

                        Object.entries(versions)
                            .forEach(([versionName, versionData]) => {
                                const {
                                    dist: { fileCount }
                                } = versionData

                                if (fileCount <= 5) {
                                    execSync(
                                        `echo "${packageName}@${versionName}" >> void-fonts.txt`,
                                        { cwd: __dirname }
                                    )
                                }
                            })


                    }
                }
            }

            process.exit(0)
        })
}

; (
    () => {
        if (process.argv.includes("--all")) {
            findVoidPackages(false)
        } else {
            findVoidPackages(true)
        }
    }
)()