# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOldHungarian from "@electron-fonts/noto-sans-old-hungarian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOldHungarian.inject()
})
```