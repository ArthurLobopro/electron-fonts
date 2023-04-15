# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CharisSIL from "@electron-fonts/charis-sil"

window.addEventListener("DOMContentLoaded", () => {
    CharisSIL.inject()
})
```