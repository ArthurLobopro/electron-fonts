# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SairaStencilOne from "@electron-fonts/saira-stencil-one"

window.addEventListener("DOMContentLoaded", () => {
    SairaStencilOne.inject()
})
```