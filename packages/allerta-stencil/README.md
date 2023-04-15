# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AllertaStencil from "@electron-fonts/allerta-stencil"

window.addEventListener("DOMContentLoaded", () => {
    AllertaStencil.inject()
})
```