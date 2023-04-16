# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSundanese from "@electron-fonts/noto-sans-sundanese"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSundanese.inject()
})
```