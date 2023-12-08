import axios from "axios"
import { execSync } from "child_process"
import { getPackageName } from "../Util"
import { axios_options, google_fonts_request } from "../constants"
import { getPackageData } from "../util/getPackageData"

axios.get(
    google_fonts_request,
    axios_options
)
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