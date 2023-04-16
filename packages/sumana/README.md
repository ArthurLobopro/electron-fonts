# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sumana from "@electron-fonts/sumana"

window.addEventListener("DOMContentLoaded", () => {
    Sumana.inject()
})
```