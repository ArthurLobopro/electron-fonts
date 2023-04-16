# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenKurenaido from "@electron-fonts/zen-kurenaido"

window.addEventListener("DOMContentLoaded", () => {
    ZenKurenaido.inject()
})
```