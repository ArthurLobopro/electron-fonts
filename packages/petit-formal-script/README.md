# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PetitFormalScript from "@electron-fonts/petit-formal-script"

window.addEventListener("DOMContentLoaded", () => {
    PetitFormalScript.inject()
})
```