# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Truculenta from "@electron-fonts/truculenta"

window.addEventListener("DOMContentLoaded", () => {
    Truculenta.inject()
})
```