import axios from "axios"

type untypedObject = {
    [key: string]: any
}

export function getPackageData(packageName: string, version: string = ""): Promise<string | untypedObject> {
    return new Promise((resolve, reject) => {
        axios.get(
            `https://registry.npmjs.org/@electron-fonts/${packageName}/${version}`,
            {
                headers: {
                    "Accept": "application/json"
                }
            }).then((res: any) => {
                // console.log(res)

                if (res.data.error) {
                    return resolve("Not found")
                }

                return resolve(res.data)
            }).catch(err => resolve("Not found"))
    })
}