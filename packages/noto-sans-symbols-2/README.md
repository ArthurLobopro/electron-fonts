# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSymbols2 from "@electron-fonts/noto-sans-symbols-2"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSymbols2.inject()
})
```