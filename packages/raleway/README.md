# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Raleway from "@electron-fonts/raleway"

window.addEventListener("DOMContentLoaded", () => {
    Raleway.inject()
})
```