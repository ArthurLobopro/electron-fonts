import axios from "axios"
import { PackageRegistry } from "./types"

type untypedObject = {
    [key: string]: any
}

type Response<T> =
    T extends string
    ? untypedObject
    : PackageRegistry

export function getPackageData<T>(packageName: string, version?: T): Promise<string | Response<T>> {
    return new Promise((resolve, reject) => {
        axios.get(
            `https://registry.npmjs.org/@electron-fonts/${packageName}/${version ?? ""}`,
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