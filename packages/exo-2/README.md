# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Exo2 from "@electron-fonts/exo-2"

window.addEventListener("DOMContentLoaded", () => {
    Exo2.inject()
})
```