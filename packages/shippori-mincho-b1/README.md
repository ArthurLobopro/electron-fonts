# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShipporiMinchoB1 from "@electron-fonts/shippori-mincho-b1"

window.addEventListener("DOMContentLoaded", () => {
    ShipporiMinchoB1.inject()
})
```