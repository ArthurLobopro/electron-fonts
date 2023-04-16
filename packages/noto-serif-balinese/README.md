# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifBalinese from "@electron-fonts/noto-serif-balinese"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifBalinese.inject()
})
```