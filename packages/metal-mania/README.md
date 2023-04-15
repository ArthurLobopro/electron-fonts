# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MetalMania from "@electron-fonts/metal-mania"

window.addEventListener("DOMContentLoaded", () => {
    MetalMania.inject()
})
```