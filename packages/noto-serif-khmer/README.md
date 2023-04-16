# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifKhmer from "@electron-fonts/noto-serif-khmer"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifKhmer.inject()
})
```