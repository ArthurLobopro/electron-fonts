# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialIconsRound from "@electron-fonts/material-icons-round"

window.addEventListener("DOMContentLoaded", () => {
    MaterialIconsRound.inject()
})
```