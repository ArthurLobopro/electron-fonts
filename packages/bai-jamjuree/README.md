# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BaiJamjuree from "@electron-fonts/bai-jamjuree"

window.addEventListener("DOMContentLoaded", () => {
    BaiJamjuree.inject()
})
```