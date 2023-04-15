# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Freehand from "@electron-fonts/freehand"

window.addEventListener("DOMContentLoaded", () => {
    Freehand.inject()
})
```