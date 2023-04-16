# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifGurmukhi from "@electron-fonts/noto-serif-gurmukhi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifGurmukhi.inject()
})
```