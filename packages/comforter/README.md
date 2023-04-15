# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Comforter from "@electron-fonts/comforter"

window.addEventListener("DOMContentLoaded", () => {
    Comforter.inject()
})
```