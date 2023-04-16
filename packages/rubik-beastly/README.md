# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikBeastly from "@electron-fonts/rubik-beastly"

window.addEventListener("DOMContentLoaded", () => {
    RubikBeastly.inject()
})
```