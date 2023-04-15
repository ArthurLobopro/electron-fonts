# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BarlowCondensed from "@electron-fonts/barlow-condensed"

window.addEventListener("DOMContentLoaded", () => {
    BarlowCondensed.inject()
})
```