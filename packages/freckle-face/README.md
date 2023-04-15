# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FreckleFace from "@electron-fonts/freckle-face"

window.addEventListener("DOMContentLoaded", () => {
    FreckleFace.inject()
})
```