# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendGiga from "@electron-fonts/lexend-giga"

window.addEventListener("DOMContentLoaded", () => {
    LexendGiga.inject()
})
```