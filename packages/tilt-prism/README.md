# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiltPrism from "@electron-fonts/tilt-prism"

window.addEventListener("DOMContentLoaded", () => {
    TiltPrism.inject()
})
```