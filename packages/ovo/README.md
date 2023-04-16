# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Ovo from "@electron-fonts/ovo"

window.addEventListener("DOMContentLoaded", () => {
    Ovo.inject()
})
```