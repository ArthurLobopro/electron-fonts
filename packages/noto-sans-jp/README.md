# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansJP from "@electron-fonts/noto-sans-jp"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansJP.inject()
})
```