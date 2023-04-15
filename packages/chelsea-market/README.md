# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ChelseaMarket from "@electron-fonts/chelsea-market"

window.addEventListener("DOMContentLoaded", () => {
    ChelseaMarket.inject()
})
```