# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Overpass from "@electron-fonts/overpass"

window.addEventListener("DOMContentLoaded", () => {
    Overpass.inject()
})
```