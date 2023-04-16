# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBassaVah from "@electron-fonts/noto-sans-bassa-vah"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBassaVah.inject()
})
```