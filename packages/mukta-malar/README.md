# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MuktaMalar from "@electron-fonts/mukta-malar"

window.addEventListener("DOMContentLoaded", () => {
    MuktaMalar.inject()
})
```