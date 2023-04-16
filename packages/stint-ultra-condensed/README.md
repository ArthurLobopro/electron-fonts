# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StintUltraCondensed from "@electron-fonts/stint-ultra-condensed"

window.addEventListener("DOMContentLoaded", () => {
    StintUltraCondensed.inject()
})
```