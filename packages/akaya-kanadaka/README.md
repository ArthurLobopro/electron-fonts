# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AkayaKanadaka from "@electron-fonts/akaya-kanadaka"

window.addEventListener("DOMContentLoaded", () => {
    AkayaKanadaka.inject()
})
```