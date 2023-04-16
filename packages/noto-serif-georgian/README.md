# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifGeorgian from "@electron-fonts/noto-serif-georgian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifGeorgian.inject()
})
```