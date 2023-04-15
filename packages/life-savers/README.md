# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LifeSavers from "@electron-fonts/life-savers"

window.addEventListener("DOMContentLoaded", () => {
    LifeSavers.inject()
})
```