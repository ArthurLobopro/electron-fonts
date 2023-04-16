# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLinearB from "@electron-fonts/noto-sans-linear-b"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLinearB.inject()
})
```