# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RumRaisin from "@electron-fonts/rum-raisin"

window.addEventListener("DOMContentLoaded", () => {
    RumRaisin.inject()
})
```