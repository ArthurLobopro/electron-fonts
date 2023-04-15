# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Karantina from "@electron-fonts/karantina"

window.addEventListener("DOMContentLoaded", () => {
    Karantina.inject()
})
```