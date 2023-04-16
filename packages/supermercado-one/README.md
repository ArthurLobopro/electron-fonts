# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SupermercadoOne from "@electron-fonts/supermercado-one"

window.addEventListener("DOMContentLoaded", () => {
    SupermercadoOne.inject()
})
```