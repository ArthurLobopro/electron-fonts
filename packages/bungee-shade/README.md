# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BungeeShade from "@electron-fonts/bungee-shade"

window.addEventListener("DOMContentLoaded", () => {
    BungeeShade.inject()
})
```