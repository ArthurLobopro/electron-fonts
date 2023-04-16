# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNewa from "@electron-fonts/noto-sans-newa"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNewa.inject()
})
```