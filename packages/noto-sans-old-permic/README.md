# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOldPermic from "@electron-fonts/noto-sans-old-permic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOldPermic.inject()
})
```