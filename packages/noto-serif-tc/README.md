# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifTC from "@electron-fonts/noto-serif-tc"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifTC.inject()
})
```