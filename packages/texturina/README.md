# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Texturina from "@electron-fonts/texturina"

window.addEventListener("DOMContentLoaded", () => {
    Texturina.inject()
})
```