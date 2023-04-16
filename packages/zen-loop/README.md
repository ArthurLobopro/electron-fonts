# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenLoop from "@electron-fonts/zen-loop"

window.addEventListener("DOMContentLoaded", () => {
    ZenLoop.inject()
})
```