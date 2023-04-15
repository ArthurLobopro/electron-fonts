# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendTera from "@electron-fonts/lexend-tera"

window.addEventListener("DOMContentLoaded", () => {
    LexendTera.inject()
})
```