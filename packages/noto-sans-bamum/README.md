# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBamum from "@electron-fonts/noto-sans-bamum"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBamum.inject()
})
```