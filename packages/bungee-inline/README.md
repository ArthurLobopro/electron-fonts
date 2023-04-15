# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BungeeInline from "@electron-fonts/bungee-inline"

window.addEventListener("DOMContentLoaded", () => {
    BungeeInline.inject()
})
```