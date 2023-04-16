# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Oi from "@electron-fonts/oi"

window.addEventListener("DOMContentLoaded", () => {
    Oi.inject()
})
```