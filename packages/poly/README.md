# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Poly from "@electron-fonts/poly"

window.addEventListener("DOMContentLoaded", () => {
    Poly.inject()
})
```