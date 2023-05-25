# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNandinagari from "@electron-fonts/noto-sans-nandinagari"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNandinagari.inject()
})
```