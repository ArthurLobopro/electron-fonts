# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CarroisGothicSC from "@electron-fonts/carrois-gothic-sc"

window.addEventListener("DOMContentLoaded", () => {
    CarroisGothicSC.inject()
})
```