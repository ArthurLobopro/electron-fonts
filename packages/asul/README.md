# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Asul from "@electron-fonts/asul"

window.addEventListener("DOMContentLoaded", () => {
    Asul.inject()
})
```