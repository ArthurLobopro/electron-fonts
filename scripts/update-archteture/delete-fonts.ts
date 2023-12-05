import fs from "node:fs"
import path from "node:path"
import { packagesDir } from "../Util"

const existingPackages = fs.readdirSync(packagesDir)

existingPackages.forEach(dir => {
    console.log(path.resolve(packagesDir, dir, "fonts"))

})