# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBalinese from "@electron-fonts/noto-sans-balinese"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBalinese.inject()
})
```