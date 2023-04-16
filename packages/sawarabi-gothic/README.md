# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SawarabiGothic from "@electron-fonts/sawarabi-gothic"

window.addEventListener("DOMContentLoaded", () => {
    SawarabiGothic.inject()
})
```