# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansJavanese from "@electron-fonts/noto-sans-javanese"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansJavanese.inject()
})
```