# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansChakma from "@electron-fonts/noto-sans-chakma"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansChakma.inject()
})
```