# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNushu from "@electron-fonts/noto-sans-nushu"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNushu.inject()
})
```