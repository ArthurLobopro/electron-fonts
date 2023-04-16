# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSinhala from "@electron-fonts/noto-sans-sinhala"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSinhala.inject()
})
```