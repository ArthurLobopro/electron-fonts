# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooTammudu2 from "@electron-fonts/baloo-tammudu-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooTammudu2.inject()
})
```