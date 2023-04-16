# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZCOOLKuaiLe from "@electron-fonts/zcool-kuaile"

window.addEventListener("DOMContentLoaded", () => {
    ZCOOLKuaiLe.inject()
})
```