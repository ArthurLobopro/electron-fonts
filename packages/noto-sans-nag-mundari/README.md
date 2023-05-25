# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNagMundari from "@electron-fonts/noto-sans-nag-mundari"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNagMundari.inject()
})
```