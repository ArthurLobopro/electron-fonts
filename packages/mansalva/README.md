# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Mansalva from "@electron-fonts/mansalva"

window.addEventListener("DOMContentLoaded", () => {
    Mansalva.inject()
})
```