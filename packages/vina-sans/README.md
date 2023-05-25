# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VinaSans from "@electron-fonts/vina-sans"

window.addEventListener("DOMContentLoaded", () => {
    VinaSans.inject()
})
```