# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMasaramGondi from "@electron-fonts/noto-sans-masaram-gondi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMasaramGondi.inject()
})
```