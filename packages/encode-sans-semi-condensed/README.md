# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSansSemiCondensed from "@electron-fonts/encode-sans-semi-condensed"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSansSemiCondensed.inject()
})
```