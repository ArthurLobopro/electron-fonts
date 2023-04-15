# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CormorantInfant from "@electron-fonts/cormorant-infant"

window.addEventListener("DOMContentLoaded", () => {
    CormorantInfant.inject()
})
```