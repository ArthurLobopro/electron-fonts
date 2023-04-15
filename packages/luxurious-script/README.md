# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LuxuriousScript from "@electron-fonts/luxurious-script"

window.addEventListener("DOMContentLoaded", () => {
    LuxuriousScript.inject()
})
```