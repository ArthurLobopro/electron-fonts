# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LoversQuarrel from "@electron-fonts/lovers-quarrel"

window.addEventListener("DOMContentLoaded", () => {
    LoversQuarrel.inject()
})
```