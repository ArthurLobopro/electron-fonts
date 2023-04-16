# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCaucasianAlbanian from "@electron-fonts/noto-sans-caucasian-albanian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCaucasianAlbanian.inject()
})
```