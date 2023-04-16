# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Varela from "@electron-fonts/varela"

window.addEventListener("DOMContentLoaded", () => {
    Varela.inject()
})
```