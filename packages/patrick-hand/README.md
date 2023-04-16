# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PatrickHand from "@electron-fonts/patrick-hand"

window.addEventListener("DOMContentLoaded", () => {
    PatrickHand.inject()
})
```