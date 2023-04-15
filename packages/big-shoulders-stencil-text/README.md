# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersStencilText from "@electron-fonts/big-shoulders-stencil-text"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersStencilText.inject()
})
```