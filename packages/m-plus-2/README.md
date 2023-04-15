# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MPLUS2 from "@electron-fonts/m-plus-2"

window.addEventListener("DOMContentLoaded", () => {
    MPLUS2.inject()
})
```