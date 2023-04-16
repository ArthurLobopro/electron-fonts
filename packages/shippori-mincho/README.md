# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShipporiMincho from "@electron-fonts/shippori-mincho"

window.addEventListener("DOMContentLoaded", () => {
    ShipporiMincho.inject()
})
```