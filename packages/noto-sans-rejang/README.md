# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansRejang from "@electron-fonts/noto-sans-rejang"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansRejang.inject()
})
```