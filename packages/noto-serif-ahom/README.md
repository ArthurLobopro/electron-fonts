# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifAhom from "@electron-fonts/noto-serif-ahom"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifAhom.inject()
})
```