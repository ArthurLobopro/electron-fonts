# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Dorsa from "@electron-fonts/dorsa"

window.addEventListener("DOMContentLoaded", () => {
    Dorsa.inject()
})
```