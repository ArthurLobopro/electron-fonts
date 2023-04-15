# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GowunBatang from "@electron-fonts/gowun-batang"

window.addEventListener("DOMContentLoaded", () => {
    GowunBatang.inject()
})
```