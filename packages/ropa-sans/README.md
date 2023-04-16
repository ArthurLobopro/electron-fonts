# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RopaSans from "@electron-fonts/ropa-sans"

window.addEventListener("DOMContentLoaded", () => {
    RopaSans.inject()
})
```