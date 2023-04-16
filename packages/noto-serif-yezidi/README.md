# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifYezidi from "@electron-fonts/noto-serif-yezidi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifYezidi.inject()
})
```