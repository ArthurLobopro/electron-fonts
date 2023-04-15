# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BreeSerif from "@electron-fonts/bree-serif"

window.addEventListener("DOMContentLoaded", () => {
    BreeSerif.inject()
})
```