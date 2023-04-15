# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Cardo from "@electron-fonts/cardo"

window.addEventListener("DOMContentLoaded", () => {
    Cardo.inject()
})
```