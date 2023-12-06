# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FontName from "@electron-fonts/font-name"

window.addEventListener("DOMContentLoaded", () => {
    FontName.inject()
})
```