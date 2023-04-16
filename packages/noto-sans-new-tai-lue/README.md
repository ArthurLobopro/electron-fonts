# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansNewTaiLue from "@electron-fonts/noto-sans-new-tai-lue"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansNewTaiLue.inject()
})
```