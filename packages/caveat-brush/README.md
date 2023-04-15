# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CaveatBrush from "@electron-fonts/caveat-brush"

window.addEventListener("DOMContentLoaded", () => {
    CaveatBrush.inject()
})
```