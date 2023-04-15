# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Genos from "@electron-fonts/genos"

window.addEventListener("DOMContentLoaded", () => {
    Genos.inject()
})
```