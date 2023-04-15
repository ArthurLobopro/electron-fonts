# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellDWPicaSC from "@electron-fonts/im-fell-dw-pica-sc"

window.addEventListener("DOMContentLoaded", () => {
    IMFellDWPicaSC.inject()
})
```