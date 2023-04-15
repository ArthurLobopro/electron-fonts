# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSans from "@electron-fonts/encode-sans"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSans.inject()
})
```