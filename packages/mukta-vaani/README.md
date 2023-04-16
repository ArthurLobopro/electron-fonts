# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MuktaVaani from "@electron-fonts/mukta-vaani"

window.addEventListener("DOMContentLoaded", () => {
    MuktaVaani.inject()
})
```