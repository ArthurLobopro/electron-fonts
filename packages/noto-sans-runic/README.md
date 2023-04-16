# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansRunic from "@electron-fonts/noto-sans-runic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansRunic.inject()
})
```