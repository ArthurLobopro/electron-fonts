# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Caladea from "@electron-fonts/caladea"

window.addEventListener("DOMContentLoaded", () => {
    Caladea.inject()
})
```