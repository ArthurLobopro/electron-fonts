# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersStencilDisplay from "@electron-fonts/big-shoulders-stencil-display"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersStencilDisplay.inject()
})
```