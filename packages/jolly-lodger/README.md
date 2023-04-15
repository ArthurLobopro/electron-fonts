# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JollyLodger from "@electron-fonts/jolly-lodger"

window.addEventListener("DOMContentLoaded", () => {
    JollyLodger.inject()
})
```