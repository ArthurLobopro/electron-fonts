# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KellySlab from "@electron-fonts/kelly-slab"

window.addEventListener("DOMContentLoaded", () => {
    KellySlab.inject()
})
```