# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HeptaSlab from "@electron-fonts/hepta-slab"

window.addEventListener("DOMContentLoaded", () => {
    HeptaSlab.inject()
})
```