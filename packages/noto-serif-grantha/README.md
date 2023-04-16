# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifGrantha from "@electron-fonts/noto-serif-grantha"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifGrantha.inject()
})
```