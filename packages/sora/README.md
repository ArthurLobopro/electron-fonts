# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sora from "@electron-fonts/sora"

window.addEventListener("DOMContentLoaded", () => {
    Sora.inject()
})
```