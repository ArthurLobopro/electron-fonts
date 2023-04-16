# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCypriot from "@electron-fonts/noto-sans-cypriot"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCypriot.inject()
})
```