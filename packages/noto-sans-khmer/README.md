# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKhmer from "@electron-fonts/noto-sans-khmer"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKhmer.inject()
})
```