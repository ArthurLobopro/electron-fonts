# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Almarai from "@electron-fonts/almarai"

window.addEventListener("DOMContentLoaded", () => {
    Almarai.inject()
})
```