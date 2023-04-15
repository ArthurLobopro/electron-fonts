# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GowunDodum from "@electron-fonts/gowun-dodum"

window.addEventListener("DOMContentLoaded", () => {
    GowunDodum.inject()
})
```