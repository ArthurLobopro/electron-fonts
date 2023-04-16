# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PressStart2P from "@electron-fonts/press-start-2p"

window.addEventListener("DOMContentLoaded", () => {
    PressStart2P.inject()
})
```