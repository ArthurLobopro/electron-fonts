# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CabinCondensed from "@electron-fonts/cabin-condensed"

window.addEventListener("DOMContentLoaded", () => {
    CabinCondensed.inject()
})
```