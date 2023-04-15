# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LindenHill from "@electron-fonts/linden-hill"

window.addEventListener("DOMContentLoaded", () => {
    LindenHill.inject()
})
```