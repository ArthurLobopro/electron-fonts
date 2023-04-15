# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FingerPaint from "@electron-fonts/finger-paint"

window.addEventListener("DOMContentLoaded", () => {
    FingerPaint.inject()
})
```