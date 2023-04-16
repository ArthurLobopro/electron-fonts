# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Urbanist from "@electron-fonts/urbanist"

window.addEventListener("DOMContentLoaded", () => {
    Urbanist.inject()
})
```