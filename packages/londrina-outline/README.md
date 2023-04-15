# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LondrinaOutline from "@electron-fonts/londrina-outline"

window.addEventListener("DOMContentLoaded", () => {
    LondrinaOutline.inject()
})
```