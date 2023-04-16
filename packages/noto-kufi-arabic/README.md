# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoKufiArabic from "@electron-fonts/noto-kufi-arabic"

window.addEventListener("DOMContentLoaded", () => {
    NotoKufiArabic.inject()
})
```