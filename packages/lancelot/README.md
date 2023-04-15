# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Lancelot from "@electron-fonts/lancelot"

window.addEventListener("DOMContentLoaded", () => {
    Lancelot.inject()
})
```