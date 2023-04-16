# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansModi from "@electron-fonts/noto-sans-modi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansModi.inject()
})
```