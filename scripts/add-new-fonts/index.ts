import axios from "axios"
import { execSync } from "child_process"
import fs from "fs"
import { api_key, getPackageName, packagesDir } from "../Util"

const existingPackages = fs.readdirSync(packagesDir)

axios.get(
    `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`,
    {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res => {
        const fontNames = res.data.items
            .map(font => {
                return (font.family)
            })
            .filter(font => !existingPackages.includes(getPackageName(font)))

        fontNames.forEach(font => {
            process.stdout.write(`Adding "${font}"...`)
            execSync(
                `node scripts/add-package/index.js --name="${font}"`,
                {
                    cwd: process.cwd(),
                    stdio: "ignore"
                }
            )
            console.log("  Done.")
        })

        process.exit(0)
    })