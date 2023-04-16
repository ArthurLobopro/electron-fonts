# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifHK from "@electron-fonts/noto-serif-hk"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifHK.inject()
})
```