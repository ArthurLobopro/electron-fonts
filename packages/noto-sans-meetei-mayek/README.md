# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMeeteiMayek from "@electron-fonts/noto-sans-meetei-mayek"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMeeteiMayek.inject()
})
```