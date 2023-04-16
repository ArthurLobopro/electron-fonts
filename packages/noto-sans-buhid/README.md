# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBuhid from "@electron-fonts/noto-sans-buhid"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBuhid.inject()
})
```