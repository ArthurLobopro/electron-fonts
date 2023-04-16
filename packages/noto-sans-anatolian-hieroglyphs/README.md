# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansAnatolianHieroglyphs from "@electron-fonts/noto-sans-anatolian-hieroglyphs"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansAnatolianHieroglyphs.inject()
})
```