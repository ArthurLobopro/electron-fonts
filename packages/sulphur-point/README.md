# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SulphurPoint from "@electron-fonts/sulphur-point"

window.addEventListener("DOMContentLoaded", () => {
    SulphurPoint.inject()
})
```