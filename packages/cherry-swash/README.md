# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CherrySwash from "@electron-fonts/cherry-swash"

window.addEventListener("DOMContentLoaded", () => {
    CherrySwash.inject()
})
```