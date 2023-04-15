# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlegreyaSC from "@electron-fonts/alegreya-sc"

window.addEventListener("DOMContentLoaded", () => {
    AlegreyaSC.inject()
})
```