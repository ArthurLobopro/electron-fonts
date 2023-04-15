# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooPaaji2 from "@electron-fonts/baloo-paaji-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooPaaji2.inject()
})
```