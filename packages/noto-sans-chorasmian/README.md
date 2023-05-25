# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansChorasmian from "@electron-fonts/noto-sans-chorasmian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansChorasmian.inject()
})
```