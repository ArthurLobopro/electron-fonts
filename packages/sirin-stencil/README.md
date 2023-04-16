# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SirinStencil from "@electron-fonts/sirin-stencil"

window.addEventListener("DOMContentLoaded", () => {
    SirinStencil.inject()
})
```