# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoTraditionalNushu from "@electron-fonts/noto-traditional-nushu"

window.addEventListener("DOMContentLoaded", () => {
    NotoTraditionalNushu.inject()
})
```