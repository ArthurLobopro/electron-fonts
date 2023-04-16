# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCuneiform from "@electron-fonts/noto-sans-cuneiform"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCuneiform.inject()
})
```