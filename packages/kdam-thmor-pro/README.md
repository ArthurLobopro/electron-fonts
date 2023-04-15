# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KdamThmorPro from "@electron-fonts/kdam-thmor-pro"

window.addEventListener("DOMContentLoaded", () => {
    KdamThmorPro.inject()
})
```