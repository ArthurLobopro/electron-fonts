# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GamjaFlower from "@electron-fonts/gamja-flower"

window.addEventListener("DOMContentLoaded", () => {
    GamjaFlower.inject()
})
```