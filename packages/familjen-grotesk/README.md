# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FamiljenGrotesk from "@electron-fonts/familjen-grotesk"

window.addEventListener("DOMContentLoaded", () => {
    FamiljenGrotesk.inject()
})
```