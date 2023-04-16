# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroTamil from "@electron-fonts/tiro-tamil"

window.addEventListener("DOMContentLoaded", () => {
    TiroTamil.inject()
})
```