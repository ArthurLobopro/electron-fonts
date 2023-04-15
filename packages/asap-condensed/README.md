# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AsapCondensed from "@electron-fonts/asap-condensed"

window.addEventListener("DOMContentLoaded", () => {
    AsapCondensed.inject()
})
```