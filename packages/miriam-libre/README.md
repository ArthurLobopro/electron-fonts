# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MiriamLibre from "@electron-fonts/miriam-libre"

window.addEventListener("DOMContentLoaded", () => {
    MiriamLibre.inject()
})
```