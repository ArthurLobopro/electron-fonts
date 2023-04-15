# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendPeta from "@electron-fonts/lexend-peta"

window.addEventListener("DOMContentLoaded", () => {
    LexendPeta.inject()
})
```