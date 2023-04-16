# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikGemstones from "@electron-fonts/rubik-gemstones"

window.addEventListener("DOMContentLoaded", () => {
    RubikGemstones.inject()
})
```