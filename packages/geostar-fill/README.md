# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GeostarFill from "@electron-fonts/geostar-fill"

window.addEventListener("DOMContentLoaded", () => {
    GeostarFill.inject()
})
```