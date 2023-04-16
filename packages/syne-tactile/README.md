# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SyneTactile from "@electron-fonts/syne-tactile"

window.addEventListener("DOMContentLoaded", () => {
    SyneTactile.inject()
})
```