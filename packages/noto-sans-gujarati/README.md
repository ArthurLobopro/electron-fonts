# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGujarati from "@electron-fonts/noto-sans-gujarati"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGujarati.inject()
})
```