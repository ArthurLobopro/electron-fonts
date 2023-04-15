# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ContrailOne from "@electron-fonts/contrail-one"

window.addEventListener("DOMContentLoaded", () => {
    ContrailOne.inject()
})
```