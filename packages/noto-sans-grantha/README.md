# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGrantha from "@electron-fonts/noto-sans-grantha"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGrantha.inject()
})
```