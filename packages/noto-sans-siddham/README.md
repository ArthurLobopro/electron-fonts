# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSiddham from "@electron-fonts/noto-sans-siddham"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSiddham.inject()
})
```