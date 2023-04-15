# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Explora from "@electron-fonts/explora"

window.addEventListener("DOMContentLoaded", () => {
    Explora.inject()
})
```