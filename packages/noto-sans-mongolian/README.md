# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMongolian from "@electron-fonts/noto-sans-mongolian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMongolian.inject()
})
```