# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaShanZheng from "@electron-fonts/ma-shan-zheng"

window.addEventListener("DOMContentLoaded", () => {
    MaShanZheng.inject()
})
```