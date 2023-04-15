# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialIcons from "@electron-fonts/material-icons"

window.addEventListener("DOMContentLoaded", () => {
    MaterialIcons.inject()
})
```