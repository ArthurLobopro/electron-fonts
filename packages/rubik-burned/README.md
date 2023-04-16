# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikBurned from "@electron-fonts/rubik-burned"

window.addEventListener("DOMContentLoaded", () => {
    RubikBurned.inject()
})
```