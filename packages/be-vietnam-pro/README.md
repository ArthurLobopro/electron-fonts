# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BeVietnamPro from "@electron-fonts/be-vietnam-pro"

window.addEventListener("DOMContentLoaded", () => {
    BeVietnamPro.inject()
})
```