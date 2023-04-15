# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BirthstoneBounce from "@electron-fonts/birthstone-bounce"

window.addEventListener("DOMContentLoaded", () => {
    BirthstoneBounce.inject()
})
```