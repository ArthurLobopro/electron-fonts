# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Monofett from "@electron-fonts/monofett"

window.addEventListener("DOMContentLoaded", () => {
    Monofett.inject()
})
```