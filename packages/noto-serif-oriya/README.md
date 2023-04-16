# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifOriya from "@electron-fonts/noto-serif-oriya"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifOriya.inject()
})
```