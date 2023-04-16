# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SofiaSansCondensed from "@electron-fonts/sofia-sans-condensed"

window.addEventListener("DOMContentLoaded", () => {
    SofiaSansCondensed.inject()
})
```