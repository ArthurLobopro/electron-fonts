# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooBhaina2 from "@electron-fonts/baloo-bhaina-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooBhaina2.inject()
})
```