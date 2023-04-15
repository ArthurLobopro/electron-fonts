# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooBhaijaan2 from "@electron-fonts/baloo-bhaijaan-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooBhaijaan2.inject()
})
```