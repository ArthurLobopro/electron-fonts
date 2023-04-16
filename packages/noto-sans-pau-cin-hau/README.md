# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansPauCinHau from "@electron-fonts/noto-sans-pau-cin-hau"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansPauCinHau.inject()
})
```