# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMro from "@electron-fonts/noto-sans-mro"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMro.inject()
})
```