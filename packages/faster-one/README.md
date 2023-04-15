# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FasterOne from "@electron-fonts/faster-one"

window.addEventListener("DOMContentLoaded", () => {
    FasterOne.inject()
})
```