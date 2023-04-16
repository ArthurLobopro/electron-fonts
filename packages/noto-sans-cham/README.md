# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCham from "@electron-fonts/noto-sans-cham"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCham.inject()
})
```