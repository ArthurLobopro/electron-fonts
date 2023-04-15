# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MarckScript from "@electron-fonts/marck-script"

window.addEventListener("DOMContentLoaded", () => {
    MarckScript.inject()
})
```