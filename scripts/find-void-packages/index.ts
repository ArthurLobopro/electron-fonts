import axios from "axios"
import { execSync } from "child_process"
import { api_key, getPackageName } from "../Util"
import { getPackageData } from "../util/getPackageData"

axios.get(
    `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`,
    {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(async res => {
        const fontNames = res.data.items
            .map(font => font.family)

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

        process.exit(0)
    })