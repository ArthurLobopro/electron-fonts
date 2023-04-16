# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansHatran from "@electron-fonts/noto-sans-hatran"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansHatran.inject()
})
```