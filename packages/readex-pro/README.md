# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ReadexPro from "@electron-fonts/readex-pro"

window.addEventListener("DOMContentLoaded", () => {
    ReadexPro.inject()
})
```