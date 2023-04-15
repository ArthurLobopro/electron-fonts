# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Gugi from "@electron-fonts/gugi"

window.addEventListener("DOMContentLoaded", () => {
    Gugi.inject()
})
```