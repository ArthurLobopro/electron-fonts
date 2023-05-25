# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Playfair from "@electron-fonts/playfair"

window.addEventListener("DOMContentLoaded", () => {
    Playfair.inject()
})
```