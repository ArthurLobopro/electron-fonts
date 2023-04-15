# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MPLUS1p from "@electron-fonts/m-plus-1p"

window.addEventListener("DOMContentLoaded", () => {
    MPLUS1p.inject()
})
```