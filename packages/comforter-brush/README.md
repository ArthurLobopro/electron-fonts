# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ComforterBrush from "@electron-fonts/comforter-brush"

window.addEventListener("DOMContentLoaded", () => {
    ComforterBrush.inject()
})
```