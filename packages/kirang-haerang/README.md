# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KirangHaerang from "@electron-fonts/kirang-haerang"

window.addEventListener("DOMContentLoaded", () => {
    KirangHaerang.inject()
})
```