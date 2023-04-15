# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Chewy from "@electron-fonts/chewy"

window.addEventListener("DOMContentLoaded", () => {
    Chewy.inject()
})
```