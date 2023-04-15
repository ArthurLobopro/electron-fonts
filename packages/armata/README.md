# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Armata from "@electron-fonts/armata"

window.addEventListener("DOMContentLoaded", () => {
    Armata.inject()
})
```