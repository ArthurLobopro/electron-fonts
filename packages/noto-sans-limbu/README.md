# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLimbu from "@electron-fonts/noto-sans-limbu"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLimbu.inject()
})
```