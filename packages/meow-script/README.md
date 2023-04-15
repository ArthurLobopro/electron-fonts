# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MeowScript from "@electron-fonts/meow-script"

window.addEventListener("DOMContentLoaded", () => {
    MeowScript.inject()
})
```