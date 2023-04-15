# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MonsieurLaDoulaise from "@electron-fonts/monsieur-la-doulaise"

window.addEventListener("DOMContentLoaded", () => {
    MonsieurLaDoulaise.inject()
})
```