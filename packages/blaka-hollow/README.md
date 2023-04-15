# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BlakaHollow from "@electron-fonts/blaka-hollow"

window.addEventListener("DOMContentLoaded", () => {
    BlakaHollow.inject()
})
```