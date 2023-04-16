# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SplineSansMono from "@electron-fonts/spline-sans-mono"

window.addEventListener("DOMContentLoaded", () => {
    SplineSansMono.inject()
})
```