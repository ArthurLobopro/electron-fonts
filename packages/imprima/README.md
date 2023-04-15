# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Imprima from "@electron-fonts/imprima"

window.addEventListener("DOMContentLoaded", () => {
    Imprima.inject()
})
```