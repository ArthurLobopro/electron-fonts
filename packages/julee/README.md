# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Julee from "@electron-fonts/julee"

window.addEventListener("DOMContentLoaded", () => {
    Julee.inject()
})
```