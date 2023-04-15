# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import K2D from "@electron-fonts/k2d"

window.addEventListener("DOMContentLoaded", () => {
    K2D.inject()
})
```