# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMahajani from "@electron-fonts/noto-sans-mahajani"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMahajani.inject()
})
```