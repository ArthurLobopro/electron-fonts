# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NanumBrushScript from "@electron-fonts/nanum-brush-script"

window.addEventListener("DOMContentLoaded", () => {
    NanumBrushScript.inject()
})
```