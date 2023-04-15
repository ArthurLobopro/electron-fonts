# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KaushanScript from "@electron-fonts/kaushan-script"

window.addEventListener("DOMContentLoaded", () => {
    KaushanScript.inject()
})
```