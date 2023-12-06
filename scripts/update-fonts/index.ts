import axios from "axios"
import { execSync } from "node:child_process"
import { api_key, argExists, getPackageName } from "../Util"
import { root } from "../constants"
import { getPackageData } from "../util/getPackageData"

const dry = argExists("--dry")

axios.get(
    `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`,
    {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(async (res) => {
        const fontData = res.data.items
            .map(font => {
                const { family, lastModified } = font

                return {
                    family,
                    lastModified
                }
            })

        for (const data of fontData) {
            const {
                family,
                lastModified
            } = data

            const packageData = await getPackageData(getPackageName(family)) as { [key: string]: any } | string

            if (typeof packageData !== "string") {
                const {
                    ["dist-tags"]: {
                        latest
                    },

                    time: {
                        [latest]: lastRelease
                    }
                } = packageData

                const fontLastModified = new Date(lastModified)
                const packageLastRelease = new Date(lastRelease)

                if (packageLastRelease < fontLastModified) {
                    const base_version = latest.split(".")
                    const last_number = Number(base_version.pop())
                    base_version.push(last_number)
                    const new_version = base_version.join(".")

                    process.stdout.write(`Updating "${family}"...`)

                    execSync(
                        [
                            "npm run add-package",
                            `--name="${family}"`,
                            `--version="${new_version}"`,
                            dry ? "--dry" : ""
                        ].join(" "),
                        {
                            stdio: "ignore",
                            cwd: root
                        }
                    )

                    console.log("  Done!")
                }
            } else {
                process.stdout.write(`Adding "${family}"...`)

                execSync(
                    [
                        "npm run add-package",
                        `--name="${family}"`,
                        dry ? "--dry" : ""
                    ].join(" "),
                    {
                        stdio: "ignore",
                        cwd: root
                    }
                )

                console.log("  Done!")
            }
        }

        process.exit(0)
    })