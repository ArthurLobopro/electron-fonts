# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGeorgian from "@electron-fonts/noto-sans-georgian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGeorgian.inject()
})
```