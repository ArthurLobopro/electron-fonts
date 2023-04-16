# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ReemKufiFun from "@electron-fonts/reem-kufi-fun"

window.addEventListener("DOMContentLoaded", () => {
    ReemKufiFun.inject()
})
```