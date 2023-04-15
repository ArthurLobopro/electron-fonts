# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersInlineDisplay from "@electron-fonts/big-shoulders-inline-display"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersInlineDisplay.inject()
})
```