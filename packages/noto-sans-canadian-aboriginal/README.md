# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCanadianAboriginal from "@electron-fonts/noto-sans-canadian-aboriginal"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCanadianAboriginal.inject()
})
```