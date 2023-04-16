# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifKhojki from "@electron-fonts/noto-serif-khojki"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifKhojki.inject()
})
```