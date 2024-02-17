import axios from "axios"
import { execSync } from "node:child_process"
import { argExists } from "../Util"
import { axios_options, google_fonts_request, root } from "../constants"

const dry = argExists("--dry")

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
            const {
                family,
            } = data

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
        }

        process.exit(0)
    })