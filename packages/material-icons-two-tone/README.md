# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialIconsTwoTone from "@electron-fonts/material-icons-two-tone"

window.addEventListener("DOMContentLoaded", () => {
    MaterialIconsTwoTone.inject()
})
```