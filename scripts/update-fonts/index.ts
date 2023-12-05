import axios from "axios"
import fs from "node:fs"
import { api_key, getPackageName, packagesDir } from "../Util"
import { getPackageData } from "../util/getPackageData"

const existingPackages = fs.readdirSync(packagesDir)

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
                    console.log(`${family}: `)
                    console.table({
                        fontLastModified: fontLastModified.toJSON(),
                        packageLastRelease: packageLastRelease.toJSON()
                    })
                }
            }
        }

        // fontData.forEach(({ family }) => {
        //     process.stdout.write(`Updating "${family}"...`)
        //     // execSync(
        //     //     `yarn tsx update-package --name="${family}"`,
        //     //     {
        //     //         cwd: process.cwd(),
        //     //         stdio: "ignore"
        //     //     }
        //     // )
        //     console.log("  Done.")
        // })

        process.exit(0)
    })