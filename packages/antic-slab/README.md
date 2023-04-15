# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnticSlab from "@electron-fonts/antic-slab"

window.addEventListener("DOMContentLoaded", () => {
    AnticSlab.inject()
})
```