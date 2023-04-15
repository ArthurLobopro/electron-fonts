# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlfaSlabOne from "@electron-fonts/alfa-slab-one"

window.addEventListener("DOMContentLoaded", () => {
    AlfaSlabOne.inject()
})
```