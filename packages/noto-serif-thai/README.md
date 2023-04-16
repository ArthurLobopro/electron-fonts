# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifThai from "@electron-fonts/noto-serif-thai"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifThai.inject()
})
```