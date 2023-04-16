# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikPuddles from "@electron-fonts/rubik-puddles"

window.addEventListener("DOMContentLoaded", () => {
    RubikPuddles.inject()
})
```