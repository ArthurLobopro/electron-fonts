# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMandaic from "@electron-fonts/noto-sans-mandaic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMandaic.inject()
})
```