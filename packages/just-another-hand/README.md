# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JustAnotherHand from "@electron-fonts/just-another-hand"

window.addEventListener("DOMContentLoaded", () => {
    JustAnotherHand.inject()
})
```