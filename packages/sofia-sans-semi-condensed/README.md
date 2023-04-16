# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SofiaSansSemiCondensed from "@electron-fonts/sofia-sans-semi-condensed"

window.addEventListener("DOMContentLoaded", () => {
    SofiaSansSemiCondensed.inject()
})
```