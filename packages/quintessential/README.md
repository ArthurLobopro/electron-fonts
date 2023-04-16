# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Quintessential from "@electron-fonts/quintessential"

window.addEventListener("DOMContentLoaded", () => {
    Quintessential.inject()
})
```