# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansWarangCiti from "@electron-fonts/noto-sans-warang-citi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansWarangCiti.inject()
})
```