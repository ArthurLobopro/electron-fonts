# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansVai from "@electron-fonts/noto-sans-vai"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansVai.inject()
})
```