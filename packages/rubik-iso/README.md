# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikIso from "@electron-fonts/rubik-iso"

window.addEventListener("DOMContentLoaded", () => {
    RubikIso.inject()
})
```