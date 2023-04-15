# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Halant from "@electron-fonts/halant"

window.addEventListener("DOMContentLoaded", () => {
    Halant.inject()
})
```