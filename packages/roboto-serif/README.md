# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RobotoSerif from "@electron-fonts/roboto-serif"

window.addEventListener("DOMContentLoaded", () => {
    RobotoSerif.inject()
})
```