# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## Limitations

These packages may not work in `BrowserWindow` instances that loaded online webpages. That happens because electron by default not allow load local resources in webpages.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroTelugu from "@electron-fonts/tiro-telugu"

window.addEventListener("DOMContentLoaded", () => {
    TiroTelugu.inject()
})
```