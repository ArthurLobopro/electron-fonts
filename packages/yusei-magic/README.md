# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YuseiMagic from "@electron-fonts/yusei-magic"

window.addEventListener("DOMContentLoaded", () => {
    YuseiMagic.inject()
})
```