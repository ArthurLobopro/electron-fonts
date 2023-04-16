# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSharada from "@electron-fonts/noto-sans-sharada"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSharada.inject()
})
```