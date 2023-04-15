const path = require("path")
const fs = require("fs")
const { execSync } = require("child_process")
const { generateReadme } = require("../create/generators/readme.js")

const packages_dir = path.resolve(__dirname, "../../packages")

const packages_paths = fs.readdirSync(packages_dir).map((package_name) => path.resolve(packages_dir, package_name))

function print(text) {
    process.stdout.write(text)
}

function println(text) {
    process.stdout.write(text + "\n")
}

packages_paths.forEach((packagePath, index) => {

    const jsonPath = path.resolve(packagePath, "package.json")

    const content = require(jsonPath)

    if (content.version === "1.1.0") {
        // Already updated
        return
    }

    const name = content.name
    const fontName = content.keywords.at(-1)

    print(`Updating ${name} package...`)

    content.version = "1.1.0"
    content.dependencies["electron-css-injector"] = "1.2.0"

    fs.writeFileSync(jsonPath, JSON.stringify(content, null, 4))

    println("    Done.")

    print("    Updating README.md...")

    const readmePath = path.resolve(packagePath, "README.md")
    fs.rmSync(readmePath, { force: true })

    generateReadme(fontName, packagePath)

    println("    Done.")

    print("    Creating commit...")

    execSync(
        `git add "${packagePath}" && git commit -m "feat: Updated ${content.name} package"`,
        {
            cwd: process.cwd(),
            stdio: "ignore"
        }
    )

    println("    Done.")

    print("Publishing package...")

    execSync(
        "npm publish",
        {
            cwd: packagePath,
            stdio: "ignore"
        }
    )

    println("    Done.")

    println("\n")
})