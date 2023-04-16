# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTaiTham from "@electron-fonts/noto-sans-tai-tham"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTaiTham.inject()
})
```