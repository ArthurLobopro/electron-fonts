# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikVinyl from "@electron-fonts/rubik-vinyl"

window.addEventListener("DOMContentLoaded", () => {
    RubikVinyl.inject()
})
```