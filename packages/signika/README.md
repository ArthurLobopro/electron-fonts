# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Signika from "@electron-fonts/signika"

window.addEventListener("DOMContentLoaded", () => {
    Signika.inject()
})
```