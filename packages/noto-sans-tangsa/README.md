# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTangsa from "@electron-fonts/noto-sans-tangsa"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTangsa.inject()
})
```