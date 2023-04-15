# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnticDidone from "@electron-fonts/antic-didone"

window.addEventListener("DOMContentLoaded", () => {
    AnticDidone.inject()
})
```