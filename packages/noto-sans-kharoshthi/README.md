# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKharoshthi from "@electron-fonts/noto-sans-kharoshthi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKharoshthi.inject()
})
```