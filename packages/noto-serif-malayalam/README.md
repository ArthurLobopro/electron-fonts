# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifMalayalam from "@electron-fonts/noto-serif-malayalam"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifMalayalam.inject()
})
```