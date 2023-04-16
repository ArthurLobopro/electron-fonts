# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SassyFrass from "@electron-fonts/sassy-frass"

window.addEventListener("DOMContentLoaded", () => {
    SassyFrass.inject()
})
```