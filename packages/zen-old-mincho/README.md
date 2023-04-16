# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenOldMincho from "@electron-fonts/zen-old-mincho"

window.addEventListener("DOMContentLoaded", () => {
    ZenOldMincho.inject()
})
```