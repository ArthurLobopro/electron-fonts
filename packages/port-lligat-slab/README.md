# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PortLligatSlab from "@electron-fonts/port-lligat-slab"

window.addEventListener("DOMContentLoaded", () => {
    PortLligatSlab.inject()
})
```