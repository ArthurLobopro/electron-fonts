# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBatak from "@electron-fonts/noto-sans-batak"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBatak.inject()
})
```