# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SpectralSC from "@electron-fonts/spectral-sc"

window.addEventListener("DOMContentLoaded", () => {
    SpectralSC.inject()
})
```