# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnnieUseYourTelescope from "@electron-fonts/annie-use-your-telescope"

window.addEventListener("DOMContentLoaded", () => {
    AnnieUseYourTelescope.inject()
})
```