# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifJP from "@electron-fonts/noto-serif-jp"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifJP.inject()
})
```