# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Barrio from "@electron-fonts/barrio"

window.addEventListener("DOMContentLoaded", () => {
    Barrio.inject()
})
```