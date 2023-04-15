# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GochiHand from "@electron-fonts/gochi-hand"

window.addEventListener("DOMContentLoaded", () => {
    GochiHand.inject()
})
```