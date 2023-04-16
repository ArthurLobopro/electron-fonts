# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RhodiumLibre from "@electron-fonts/rhodium-libre"

window.addEventListener("DOMContentLoaded", () => {
    RhodiumLibre.inject()
})
```