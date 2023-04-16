# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VesperLibre from "@electron-fonts/vesper-libre"

window.addEventListener("DOMContentLoaded", () => {
    VesperLibre.inject()
})
```