# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GoudyBookletter1911 from "@electron-fonts/goudy-bookletter-1911"

window.addEventListener("DOMContentLoaded", () => {
    GoudyBookletter1911.inject()
})
```