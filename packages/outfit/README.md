# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Outfit from "@electron-fonts/outfit"

window.addEventListener("DOMContentLoaded", () => {
    Outfit.inject()
})
```