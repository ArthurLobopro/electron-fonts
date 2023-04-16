# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ReemKufi from "@electron-fonts/reem-kufi"

window.addEventListener("DOMContentLoaded", () => {
    ReemKufi.inject()
})
```