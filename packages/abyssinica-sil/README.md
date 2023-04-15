# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AbyssinicaSIL from "@electron-fonts/abyssinica-sil"

window.addEventListener("DOMContentLoaded", () => {
    AbyssinicaSIL.inject()
})
```