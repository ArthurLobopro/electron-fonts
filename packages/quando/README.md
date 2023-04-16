# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Quando from "@electron-fonts/quando"

window.addEventListener("DOMContentLoaded", () => {
    Quando.inject()
})
```