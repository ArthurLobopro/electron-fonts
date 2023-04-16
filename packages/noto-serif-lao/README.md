# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifLao from "@electron-fonts/noto-serif-lao"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifLao.inject()
})
```