# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HachiMaruPop from "@electron-fonts/hachi-maru-pop"

window.addEventListener("DOMContentLoaded", () => {
    HachiMaruPop.inject()
})
```