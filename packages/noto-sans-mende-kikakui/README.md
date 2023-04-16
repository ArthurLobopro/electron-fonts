# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMendeKikakui from "@electron-fonts/noto-sans-mende-kikakui"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMendeKikakui.inject()
})
```