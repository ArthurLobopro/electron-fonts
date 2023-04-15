# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellDoublePicaSC from "@electron-fonts/im-fell-double-pica-sc"

window.addEventListener("DOMContentLoaded", () => {
    IMFellDoublePicaSC.inject()
})
```