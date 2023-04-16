# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikDirt from "@electron-fonts/rubik-dirt"

window.addEventListener("DOMContentLoaded", () => {
    RubikDirt.inject()
})
```