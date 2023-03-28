# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## Limitations

These packages may not work in `BrowserWindow` instances that loaded online webpages. That happens because electron by default not allow load local resources in webpages.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Rubik80sFade from "@electron-fonts/rubik-80s-fade"

window.addEventListener("DOMContentLoaded", () => {
    Rubik80sFade.inject()
})
```