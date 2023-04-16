# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SixCaps from "@electron-fonts/six-caps"

window.addEventListener("DOMContentLoaded", () => {
    SixCaps.inject()
})
```