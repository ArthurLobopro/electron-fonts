# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PontanoSans from "@electron-fonts/pontano-sans"

window.addEventListener("DOMContentLoaded", () => {
    PontanoSans.inject()
})
```