# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Fraunces from "@electron-fonts/fraunces"

window.addEventListener("DOMContentLoaded", () => {
    Fraunces.inject()
})
```