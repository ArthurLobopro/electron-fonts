# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SplineSans from "@electron-fonts/spline-sans"

window.addEventListener("DOMContentLoaded", () => {
    SplineSans.inject()
})
```