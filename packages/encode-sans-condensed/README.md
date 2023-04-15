# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSansCondensed from "@electron-fonts/encode-sans-condensed"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSansCondensed.inject()
})
```