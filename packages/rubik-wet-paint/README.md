# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikWetPaint from "@electron-fonts/rubik-wet-paint"

window.addEventListener("DOMContentLoaded", () => {
    RubikWetPaint.inject()
})
```