# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PalanquinDark from "@electron-fonts/palanquin-dark"

window.addEventListener("DOMContentLoaded", () => {
    PalanquinDark.inject()
})
```