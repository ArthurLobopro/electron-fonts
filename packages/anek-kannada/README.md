# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnekKannada from "@electron-fonts/anek-kannada"

window.addEventListener("DOMContentLoaded", () => {
    AnekKannada.inject()
})
```