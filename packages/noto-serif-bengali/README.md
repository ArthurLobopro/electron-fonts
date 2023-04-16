# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifBengali from "@electron-fonts/noto-serif-bengali"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifBengali.inject()
})
```