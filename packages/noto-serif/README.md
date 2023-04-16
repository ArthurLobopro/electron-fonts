# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerif from "@electron-fonts/noto-serif"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerif.inject()
})
```