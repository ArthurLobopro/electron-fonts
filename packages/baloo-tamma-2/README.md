# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooTamma2 from "@electron-fonts/baloo-tamma-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooTamma2.inject()
})
```