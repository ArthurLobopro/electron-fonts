# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifDisplay from "@electron-fonts/noto-serif-display"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifDisplay.inject()
})
```