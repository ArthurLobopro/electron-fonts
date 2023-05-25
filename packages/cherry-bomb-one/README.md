# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CherryBombOne from "@electron-fonts/cherry-bomb-one"

window.addEventListener("DOMContentLoaded", () => {
    CherryBombOne.inject()
})
```