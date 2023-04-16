# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RibeyeMarrow from "@electron-fonts/ribeye-marrow"

window.addEventListener("DOMContentLoaded", () => {
    RibeyeMarrow.inject()
})
```