# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenDots from "@electron-fonts/zen-dots"

window.addEventListener("DOMContentLoaded", () => {
    ZenDots.inject()
})
```