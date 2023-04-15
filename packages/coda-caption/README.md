# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CodaCaption from "@electron-fonts/coda-caption"

window.addEventListener("DOMContentLoaded", () => {
    CodaCaption.inject()
})
```