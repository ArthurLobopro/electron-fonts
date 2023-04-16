# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OrelegaOne from "@electron-fonts/orelega-one"

window.addEventListener("DOMContentLoaded", () => {
    OrelegaOne.inject()
})
```