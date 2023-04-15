# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BeauRivage from "@electron-fonts/beau-rivage"

window.addEventListener("DOMContentLoaded", () => {
    BeauRivage.inject()
})
```