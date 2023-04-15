# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArbutusSlab from "@electron-fonts/arbutus-slab"

window.addEventListener("DOMContentLoaded", () => {
    ArbutusSlab.inject()
})
```