# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KiteOne from "@electron-fonts/kite-one"

window.addEventListener("DOMContentLoaded", () => {
    KiteOne.inject()
})
```