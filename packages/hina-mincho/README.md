# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HinaMincho from "@electron-fonts/hina-mincho"

window.addEventListener("DOMContentLoaded", () => {
    HinaMincho.inject()
})
```