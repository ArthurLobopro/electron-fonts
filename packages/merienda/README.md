# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Merienda from "@electron-fonts/merienda"

window.addEventListener("DOMContentLoaded", () => {
    Merienda.inject()
})
```