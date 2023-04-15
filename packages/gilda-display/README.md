# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GildaDisplay from "@electron-fonts/gilda-display"

window.addEventListener("DOMContentLoaded", () => {
    GildaDisplay.inject()
})
```