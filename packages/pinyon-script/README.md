# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PinyonScript from "@electron-fonts/pinyon-script"

window.addEventListener("DOMContentLoaded", () => {
    PinyonScript.inject()
})
```