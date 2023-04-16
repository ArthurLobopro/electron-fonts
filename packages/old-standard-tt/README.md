# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OldStandardTT from "@electron-fonts/old-standard-tt"

window.addEventListener("DOMContentLoaded", () => {
    OldStandardTT.inject()
})
```