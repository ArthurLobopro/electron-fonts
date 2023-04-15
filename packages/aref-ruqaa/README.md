# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArefRuqaa from "@electron-fonts/aref-ruqaa"

window.addEventListener("DOMContentLoaded", () => {
    ArefRuqaa.inject()
})
```