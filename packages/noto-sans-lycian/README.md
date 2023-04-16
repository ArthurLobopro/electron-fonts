# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLycian from "@electron-fonts/noto-sans-lycian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLycian.inject()
})
```