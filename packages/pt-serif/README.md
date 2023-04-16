# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTSerif from "@electron-fonts/pt-serif"

window.addEventListener("DOMContentLoaded", () => {
    PTSerif.inject()
})
```