# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShipporiAntiqueB1 from "@electron-fonts/shippori-antique-b1"

window.addEventListener("DOMContentLoaded", () => {
    ShipporiAntiqueB1.inject()
})
```