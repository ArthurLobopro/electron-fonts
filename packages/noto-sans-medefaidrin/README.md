# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMedefaidrin from "@electron-fonts/noto-sans-medefaidrin"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMedefaidrin.inject()
})
```