# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ButterflyKids from "@electron-fonts/butterfly-kids"

window.addEventListener("DOMContentLoaded", () => {
    ButterflyKids.inject()
})
```