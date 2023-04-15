# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BungeeSpice from "@electron-fonts/bungee-spice"

window.addEventListener("DOMContentLoaded", () => {
    BungeeSpice.inject()
})
```