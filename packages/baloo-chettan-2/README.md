# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooChettan2 from "@electron-fonts/baloo-chettan-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooChettan2.inject()
})
```