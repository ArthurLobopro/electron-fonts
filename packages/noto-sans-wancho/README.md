# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansWancho from "@electron-fonts/noto-sans-wancho"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansWancho.inject()
})
```