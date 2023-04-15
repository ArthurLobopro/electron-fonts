# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LongCang from "@electron-fonts/long-cang"

window.addEventListener("DOMContentLoaded", () => {
    LongCang.inject()
})
```