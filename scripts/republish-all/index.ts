import axios from "axios"
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { argExists } from "../Util"
import { axios_options, google_fonts_request, root } from "../constants"

const dry = argExists("--dry")
const publishedListPath = path.resolve(__dirname, "published.txt")

if (!fs.existsSync(publishedListPath)) {
    fs.writeFileSync(publishedListPath, "")
}

function alreadyPublished(family: string) {
    return fs.readFileSync(publishedListPath).toString().includes(family)
}

axios.get(
    google_fonts_request,
    axios_options
)
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
            const { family } = data

            if (!alreadyPublished(family)) {
                try {
                    process.stdout.write(`Adding "${family}"...`)

                    execSync(
                        [
                            "npm run add-package --",
                            `--name="${family}"`,
                            dry ? "--dry" : ""
                        ].join(" "),
                        {
                            stdio: "ignore",
                            cwd: root,
                        }
                    )

                    console.log("  Done!")

                    execSync(`echo "${family}" >> ${publishedListPath}`)
                } catch (error) {
                    console.log("  Error!")
                }
            } else {
                console.log(`${family} already published, skipping!`)
            }
        }

        process.exit(0)
    })