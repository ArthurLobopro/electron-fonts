import path from "node:path"
import { api_key } from "./Util"

export const base_version = "1.1.0"
export const root = path.resolve(__dirname, "../")

export const google_fonts_request = `https://webfonts.googleapis.com/v1/webfonts?sort=ALPHA&key=${api_key}`
export const axios_options = {
    headers: {
        "Accept": "application/json"
    }
}