# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Felipa from "@electron-fonts/felipa"

window.addEventListener("DOMContentLoaded", () => {
    Felipa.inject()
})
```