# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Tapestry from "@electron-fonts/tapestry"

window.addEventListener("DOMContentLoaded", () => {
    Tapestry.inject()
})
```