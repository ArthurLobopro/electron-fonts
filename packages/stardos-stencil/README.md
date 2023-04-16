# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StardosStencil from "@electron-fonts/stardos-stencil"

window.addEventListener("DOMContentLoaded", () => {
    StardosStencil.inject()
})
```