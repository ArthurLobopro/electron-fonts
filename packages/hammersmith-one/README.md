# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HammersmithOne from "@electron-fonts/hammersmith-one"

window.addEventListener("DOMContentLoaded", () => {
    HammersmithOne.inject()
})
```