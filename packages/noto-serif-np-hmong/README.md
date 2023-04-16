# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifNPHmong from "@electron-fonts/noto-serif-np-hmong"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifNPHmong.inject()
})
```