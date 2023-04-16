# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import QuattrocentoSans from "@electron-fonts/quattrocento-sans"

window.addEventListener("DOMContentLoaded", () => {
    QuattrocentoSans.inject()
})
```