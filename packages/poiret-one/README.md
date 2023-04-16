# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PoiretOne from "@electron-fonts/poiret-one"

window.addEventListener("DOMContentLoaded", () => {
    PoiretOne.inject()
})
```