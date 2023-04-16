# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StyleScript from "@electron-fonts/style-script"

window.addEventListener("DOMContentLoaded", () => {
    StyleScript.inject()
})
```