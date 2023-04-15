# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BungeeOutline from "@electron-fonts/bungee-outline"

window.addEventListener("DOMContentLoaded", () => {
    BungeeOutline.inject()
})
```