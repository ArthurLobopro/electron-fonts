# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMono from "@electron-fonts/noto-sans-mono"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMono.inject()
})
```