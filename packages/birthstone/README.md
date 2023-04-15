# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Birthstone from "@electron-fonts/birthstone"

window.addEventListener("DOMContentLoaded", () => {
    Birthstone.inject()
})
```