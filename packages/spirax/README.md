# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Spirax from "@electron-fonts/spirax"

window.addEventListener("DOMContentLoaded", () => {
    Spirax.inject()
})
```