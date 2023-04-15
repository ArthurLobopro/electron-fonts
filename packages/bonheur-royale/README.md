# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BonheurRoyale from "@electron-fonts/bonheur-royale"

window.addEventListener("DOMContentLoaded", () => {
    BonheurRoyale.inject()
})
```