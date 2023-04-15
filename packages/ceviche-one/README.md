# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CevicheOne from "@electron-fonts/ceviche-one"

window.addEventListener("DOMContentLoaded", () => {
    CevicheOne.inject()
})
```