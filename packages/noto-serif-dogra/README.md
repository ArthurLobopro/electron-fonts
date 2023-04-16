# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifDogra from "@electron-fonts/noto-serif-dogra"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifDogra.inject()
})
```