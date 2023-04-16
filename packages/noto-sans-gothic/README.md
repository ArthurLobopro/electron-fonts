# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGothic from "@electron-fonts/noto-sans-gothic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGothic.inject()
})
```