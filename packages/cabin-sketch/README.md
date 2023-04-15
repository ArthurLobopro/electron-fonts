# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CabinSketch from "@electron-fonts/cabin-sketch"

window.addEventListener("DOMContentLoaded", () => {
    CabinSketch.inject()
})
```