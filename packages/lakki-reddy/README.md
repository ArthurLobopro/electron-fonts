# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LakkiReddy from "@electron-fonts/lakki-reddy"

window.addEventListener("DOMContentLoaded", () => {
    LakkiReddy.inject()
})
```