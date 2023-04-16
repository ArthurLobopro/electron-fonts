# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZCOOLQingKeHuangYou from "@electron-fonts/zcool-qingke-huangyou"

window.addEventListener("DOMContentLoaded", () => {
    ZCOOLQingKeHuangYou.inject()
})
```