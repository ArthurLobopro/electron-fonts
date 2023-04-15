# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MochiyPopOne from "@electron-fonts/mochiy-pop-one"

window.addEventListener("DOMContentLoaded", () => {
    MochiyPopOne.inject()
})
```