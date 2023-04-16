# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOsage from "@electron-fonts/noto-sans-osage"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOsage.inject()
})
```