# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikPixels from "@electron-fonts/rubik-pixels"

window.addEventListener("DOMContentLoaded", () => {
    RubikPixels.inject()
})
```