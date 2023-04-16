# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBuginese from "@electron-fonts/noto-sans-buginese"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBuginese.inject()
})
```