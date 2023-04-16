# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansInscriptionalParthian from "@electron-fonts/noto-sans-inscriptional-parthian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansInscriptionalParthian.inject()
})
```