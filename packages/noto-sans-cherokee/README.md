# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCherokee from "@electron-fonts/noto-sans-cherokee"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCherokee.inject()
})
```