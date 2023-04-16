# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoNastaliqUrdu from "@electron-fonts/noto-nastaliq-urdu"

window.addEventListener("DOMContentLoaded", () => {
    NotoNastaliqUrdu.inject()
})
```