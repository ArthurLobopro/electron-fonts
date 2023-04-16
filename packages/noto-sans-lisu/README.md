# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLisu from "@electron-fonts/noto-sans-lisu"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLisu.inject()
})
```