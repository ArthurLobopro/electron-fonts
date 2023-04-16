# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansIndicSiyaqNumbers from "@electron-fonts/noto-sans-indic-siyaq-numbers"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansIndicSiyaqNumbers.inject()
})
```