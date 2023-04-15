# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CairoPlay from "@electron-fonts/cairo-play"

window.addEventListener("DOMContentLoaded", () => {
    CairoPlay.inject()
})
```