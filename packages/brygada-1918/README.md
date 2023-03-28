# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## Limitations

These packages may not work in `BrowserWindow` instances that loaded online webpages. That happens because electron by default not allow load local resources in webpages.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Brygada1918 from "@electron-fonts/brygada-1918"

window.addEventListener("DOMContentLoaded", () => {
    Brygada1918.inject()
})
```