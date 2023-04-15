# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Amarante from "@electron-fonts/amarante"

window.addEventListener("DOMContentLoaded", () => {
    Amarante.inject()
})
```