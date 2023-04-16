# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKhojki from "@electron-fonts/noto-sans-khojki"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKhojki.inject()
})
```