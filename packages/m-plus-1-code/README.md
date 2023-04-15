# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MPLUS1Code from "@electron-fonts/m-plus-1-code"

window.addEventListener("DOMContentLoaded", () => {
    MPLUS1Code.inject()
})
```