# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Uchen from "@electron-fonts/uchen"

window.addEventListener("DOMContentLoaded", () => {
    Uchen.inject()
})
```