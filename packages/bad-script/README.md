# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BadScript from "@electron-fonts/bad-script"

window.addEventListener("DOMContentLoaded", () => {
    BadScript.inject()
})
```