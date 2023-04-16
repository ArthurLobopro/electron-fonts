# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikDistressed from "@electron-fonts/rubik-distressed"

window.addEventListener("DOMContentLoaded", () => {
    RubikDistressed.inject()
})
```