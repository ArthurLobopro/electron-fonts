# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansDevanagari from "@electron-fonts/noto-sans-devanagari"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansDevanagari.inject()
})
```