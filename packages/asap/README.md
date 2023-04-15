# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Asap from "@electron-fonts/asap"

window.addEventListener("DOMContentLoaded", () => {
    Asap.inject()
})
```