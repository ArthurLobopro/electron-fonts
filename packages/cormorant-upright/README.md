# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CormorantUpright from "@electron-fonts/cormorant-upright"

window.addEventListener("DOMContentLoaded", () => {
    CormorantUpright.inject()
})
```