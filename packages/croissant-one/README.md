# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CroissantOne from "@electron-fonts/croissant-one"

window.addEventListener("DOMContentLoaded", () => {
    CroissantOne.inject()
})
```