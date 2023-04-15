# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HindSiliguri from "@electron-fonts/hind-siliguri"

window.addEventListener("DOMContentLoaded", () => {
    HindSiliguri.inject()
})
```