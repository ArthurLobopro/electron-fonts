# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BlackOpsOne from "@electron-fonts/black-ops-one"

window.addEventListener("DOMContentLoaded", () => {
    BlackOpsOne.inject()
})
```