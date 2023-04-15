# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialIconsOutlined from "@electron-fonts/material-icons-outlined"

window.addEventListener("DOMContentLoaded", () => {
    MaterialIconsOutlined.inject()
})
```