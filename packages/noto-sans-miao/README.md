# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMiao from "@electron-fonts/noto-sans-miao"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMiao.inject()
})
```