# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OdorMeanChey from "@electron-fonts/odor-mean-chey"

window.addEventListener("DOMContentLoaded", () => {
    OdorMeanChey.inject()
})
```