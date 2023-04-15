# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CraftyGirls from "@electron-fonts/crafty-girls"

window.addEventListener("DOMContentLoaded", () => {
    CraftyGirls.inject()
})
```