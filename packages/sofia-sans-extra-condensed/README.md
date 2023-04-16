# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SofiaSansExtraCondensed from "@electron-fonts/sofia-sans-extra-condensed"

window.addEventListener("DOMContentLoaded", () => {
    SofiaSansExtraCondensed.inject()
})
```