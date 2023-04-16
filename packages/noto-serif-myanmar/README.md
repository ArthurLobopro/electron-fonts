# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifMyanmar from "@electron-fonts/noto-serif-myanmar"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifMyanmar.inject()
})
```