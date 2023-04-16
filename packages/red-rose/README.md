# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RedRose from "@electron-fonts/red-rose"

window.addEventListener("DOMContentLoaded", () => {
    RedRose.inject()
})
```