# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenTokyoZoo from "@electron-fonts/zen-tokyo-zoo"

window.addEventListener("DOMContentLoaded", () => {
    ZenTokyoZoo.inject()
})
```