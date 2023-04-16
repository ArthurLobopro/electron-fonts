# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RougeScript from "@electron-fonts/rouge-script"

window.addEventListener("DOMContentLoaded", () => {
    RougeScript.inject()
})
```