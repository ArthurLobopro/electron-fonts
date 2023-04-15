# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendDeca from "@electron-fonts/lexend-deca"

window.addEventListener("DOMContentLoaded", () => {
    LexendDeca.inject()
})
```