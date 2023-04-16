# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOlChiki from "@electron-fonts/noto-sans-ol-chiki"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOlChiki.inject()
})
```