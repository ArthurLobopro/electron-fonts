# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnekDevanagari from "@electron-fonts/anek-devanagari"

window.addEventListener("DOMContentLoaded", () => {
    AnekDevanagari.inject()
})
```