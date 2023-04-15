# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JimNightshade from "@electron-fonts/jim-nightshade"

window.addEventListener("DOMContentLoaded", () => {
    JimNightshade.inject()
})
```