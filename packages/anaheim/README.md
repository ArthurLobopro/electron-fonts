# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Anaheim from "@electron-fonts/anaheim"

window.addEventListener("DOMContentLoaded", () => {
    Anaheim.inject()
})
```