# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOldNorthArabian from "@electron-fonts/noto-sans-old-north-arabian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOldNorthArabian.inject()
})
```