# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansHK from "@electron-fonts/noto-sans-hk"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansHK.inject()
})
```