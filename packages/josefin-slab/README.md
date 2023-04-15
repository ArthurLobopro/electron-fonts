# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JosefinSlab from "@electron-fonts/josefin-slab"

window.addEventListener("DOMContentLoaded", () => {
    JosefinSlab.inject()
})
```