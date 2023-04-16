# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLydian from "@electron-fonts/noto-sans-lydian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLydian.inject()
})
```