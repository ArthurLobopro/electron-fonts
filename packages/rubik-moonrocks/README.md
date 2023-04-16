# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikMoonrocks from "@electron-fonts/rubik-moonrocks"

window.addEventListener("DOMContentLoaded", () => {
    RubikMoonrocks.inject()
})
```