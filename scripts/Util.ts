export function getPackageName(fontName: string) {
    return fontName.toLowerCase().replace(/ /g, "-")
}

export function getArgValue(argName: string) {
    const arg = process.argv.find(arg => arg.startsWith(argName)) || null
    return (arg && arg.split("=")[1]) || null
}

export function argExists(argName: string) {
    return process.argv.some(arg => arg === argName)
}

export function getNextPatchVersion(version: string) {
    const splited_version: any[] = version.split(".")
    const next_number = Number(splited_version.pop()) + 1
    splited_version.push(next_number)

    return splited_version.join(".")
}