# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BungeeHairline from "@electron-fonts/bungee-hairline"

window.addEventListener("DOMContentLoaded", () => {
    BungeeHairline.inject()
})
```