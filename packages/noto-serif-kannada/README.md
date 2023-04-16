# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifKannada from "@electron-fonts/noto-serif-kannada"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifKannada.inject()
})
```