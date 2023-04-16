# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSC from "@electron-fonts/noto-sans-sc"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSC.inject()
})
```