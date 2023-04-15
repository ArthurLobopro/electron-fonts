# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArefRuqaaInk from "@electron-fonts/aref-ruqaa-ink"

window.addEventListener("DOMContentLoaded", () => {
    ArefRuqaaInk.inject()
})
```