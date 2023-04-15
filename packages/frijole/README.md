# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Frijole from "@electron-fonts/frijole"

window.addEventListener("DOMContentLoaded", () => {
    Frijole.inject()
})
```