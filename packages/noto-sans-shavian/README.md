# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansShavian from "@electron-fonts/noto-sans-shavian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansShavian.inject()
})
```