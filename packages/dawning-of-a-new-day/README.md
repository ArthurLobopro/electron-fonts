# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DawningofaNewDay from "@electron-fonts/dawning-of-a-new-day"

window.addEventListener("DOMContentLoaded", () => {
    DawningofaNewDay.inject()
})
```