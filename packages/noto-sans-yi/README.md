# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansYi from "@electron-fonts/noto-sans-yi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansYi.inject()
})
```