# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PathwayExtreme from "@electron-fonts/pathway-extreme"

window.addEventListener("DOMContentLoaded", () => {
    PathwayExtreme.inject()
})
```