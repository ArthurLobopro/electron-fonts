# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZCOOLXiaoWei from "@electron-fonts/zcool-xiaowei"

window.addEventListener("DOMContentLoaded", () => {
    ZCOOLXiaoWei.inject()
})
```