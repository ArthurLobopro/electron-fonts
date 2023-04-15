# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooThambi2 from "@electron-fonts/baloo-thambi-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooThambi2.inject()
})
```