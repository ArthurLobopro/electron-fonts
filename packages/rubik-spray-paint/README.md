# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikSprayPaint from "@electron-fonts/rubik-spray-paint"

window.addEventListener("DOMContentLoaded", () => {
    RubikSprayPaint.inject()
})
```