# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSamaritan from "@electron-fonts/noto-sans-samaritan"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSamaritan.inject()
})
```