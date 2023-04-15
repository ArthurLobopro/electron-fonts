# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MeieScript from "@electron-fonts/meie-script"

window.addEventListener("DOMContentLoaded", () => {
    MeieScript.inject()
})
```