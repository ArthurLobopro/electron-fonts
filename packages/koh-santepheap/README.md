# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KohSantepheap from "@electron-fonts/koh-santepheap"

window.addEventListener("DOMContentLoaded", () => {
    KohSantepheap.inject()
})
```