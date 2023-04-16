# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOldSouthArabian from "@electron-fonts/noto-sans-old-south-arabian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOldSouthArabian.inject()
})
```