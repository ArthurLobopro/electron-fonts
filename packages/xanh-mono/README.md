# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import XanhMono from "@electron-fonts/xanh-mono"

window.addEventListener("DOMContentLoaded", () => {
    XanhMono.inject()
})
```