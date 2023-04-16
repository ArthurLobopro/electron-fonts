# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifTangut from "@electron-fonts/noto-serif-tangut"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifTangut.inject()
})
```