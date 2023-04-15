# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSansSC from "@electron-fonts/encode-sans-sc"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSansSC.inject()
})
```