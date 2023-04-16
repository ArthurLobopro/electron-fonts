# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKayahLi from "@electron-fonts/noto-sans-kayah-li"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKayahLi.inject()
})
```