# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKR from "@electron-fonts/noto-sans-kr"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKR.inject()
})
```