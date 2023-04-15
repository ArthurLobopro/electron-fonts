# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Jost from "@electron-fonts/jost"

window.addEventListener("DOMContentLoaded", () => {
    Jost.inject()
})
```