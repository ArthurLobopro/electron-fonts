# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ImperialScript from "@electron-fonts/imperial-script"

window.addEventListener("DOMContentLoaded", () => {
    ImperialScript.inject()
})
```