# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OverlockSC from "@electron-fonts/overlock-sc"

window.addEventListener("DOMContentLoaded", () => {
    OverlockSC.inject()
})
```