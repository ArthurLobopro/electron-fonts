# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RobotoSlab from "@electron-fonts/roboto-slab"

window.addEventListener("DOMContentLoaded", () => {
    RobotoSlab.inject()
})
```