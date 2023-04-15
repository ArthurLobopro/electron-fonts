# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LaBelleAurore from "@electron-fonts/la-belle-aurore"

window.addEventListener("DOMContentLoaded", () => {
    LaBelleAurore.inject()
})
```