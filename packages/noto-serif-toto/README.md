# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifToto from "@electron-fonts/noto-serif-toto"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifToto.inject()
})
```