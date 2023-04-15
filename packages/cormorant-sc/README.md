# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CormorantSC from "@electron-fonts/cormorant-sc"

window.addEventListener("DOMContentLoaded", () => {
    CormorantSC.inject()
})
```