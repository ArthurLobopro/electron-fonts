# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMalayalam from "@electron-fonts/noto-sans-malayalam"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMalayalam.inject()
})
```