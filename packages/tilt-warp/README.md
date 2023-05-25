# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiltWarp from "@electron-fonts/tilt-warp"

window.addEventListener("DOMContentLoaded", () => {
    TiltWarp.inject()
})
```