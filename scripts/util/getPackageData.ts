import axios from "axios"

export function getPackageData(packageName: string) {
    return new Promise((resolve, reject) => {
        axios.get(
            `https://registry.npmjs.org/@electron-fonts/${packageName}`,
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