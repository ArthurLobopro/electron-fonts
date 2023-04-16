# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansDisplay from "@electron-fonts/noto-sans-display"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansDisplay.inject()
})
```