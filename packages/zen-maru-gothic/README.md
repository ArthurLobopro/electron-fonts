# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenMaruGothic from "@electron-fonts/zen-maru-gothic"

window.addEventListener("DOMContentLoaded", () => {
    ZenMaruGothic.inject()
})
```