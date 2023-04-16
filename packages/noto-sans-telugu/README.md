# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTelugu from "@electron-fonts/noto-sans-telugu"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTelugu.inject()
})
```