# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Inder from "@electron-fonts/inder"

window.addEventListener("DOMContentLoaded", () => {
    Inder.inject()
})
```