# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersDisplay from "@electron-fonts/big-shoulders-display"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersDisplay.inject()
})
```