# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Yantramanav from "@electron-fonts/yantramanav"

window.addEventListener("DOMContentLoaded", () => {
    Yantramanav.inject()
})
```