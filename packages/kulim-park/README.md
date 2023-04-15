# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KulimPark from "@electron-fonts/kulim-park"

window.addEventListener("DOMContentLoaded", () => {
    KulimPark.inject()
})
```