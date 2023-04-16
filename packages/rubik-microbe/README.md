# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikMicrobe from "@electron-fonts/rubik-microbe"

window.addEventListener("DOMContentLoaded", () => {
    RubikMicrobe.inject()
})
```