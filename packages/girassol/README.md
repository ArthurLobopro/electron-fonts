# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Girassol from "@electron-fonts/girassol"

window.addEventListener("DOMContentLoaded", () => {
    Girassol.inject()
})
```